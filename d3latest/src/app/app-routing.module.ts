import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthResolver} from './auth.resolver';
import {HomeComponent  } from './home/home/home.component';
import { HomeDetailsComponent } from './home/home-details/home-details.component';
import {D3DashboardComponent} from './d3-dashboard/d3-dashboard.component'

const routes: Routes = [
  {
    path:'',
    redirectTo:'/d3',
    pathMatch:'full'

  },
  {
    path:'home',
    component:HomeComponent,
    resolve:{
      token:AuthResolver
    }  
   },
   {
    path:'home-details',
    component:HomeDetailsComponent    
   },
   {
     path:'d3',
     component:D3DashboardComponent

   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
