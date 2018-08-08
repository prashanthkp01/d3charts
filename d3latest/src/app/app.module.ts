import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { DoughnutChartComponent, PieChartComponent, BarChartComponent } from 'angular-d3-charts';
import {SharedModule} from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthResolver} from './auth.resolver';
import { HomeComponent } from './home/home/home.component';
import { HomeDetailsComponent } from './home/home-details/home-details.component';
import { D3DashboardComponent } from './d3-dashboard/d3-dashboard.component';
import { DonutChartComponent } from './d3-dashboard/donut-chart/donut-chart.component';
import { LineChartComponent } from './d3-dashboard/line-chart/line-chart.component';
import { BarChartsComponent } from './d3-dashboard/bar-charts/bar-charts.component';

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    HomeDetailsComponent,
    DoughnutChartComponent, 
   PieChartComponent, 
   BarChartComponent, D3DashboardComponent, DonutChartComponent, LineChartComponent,
   BarChartsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,    
  ],
  providers: [AuthResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
