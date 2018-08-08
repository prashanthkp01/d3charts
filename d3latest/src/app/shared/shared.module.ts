import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {TableModule} from 'primeng/table';

import {HttpErrorHandler} from './errorHendler/HttpErrorHandler';
import {HttpConnectorService} from './services/http-connector.service';
import {AuthService} from './services/auth.service';
import {RequestInterceptor} from './services/request.interceptor';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    TableModule
  ],
  declarations: [GridComponent],
  providers: [
    HttpConnectorService,
    AuthService,
    {
      provide: ErrorHandler, 
      useClass: HttpErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  exports:[
    GridComponent,
    TableModule
  ]
})
export class SharedModule { }
