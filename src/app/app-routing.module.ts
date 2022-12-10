import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { PagesComponent } from './pages/pages.component';


const routes:Routes=[

  // {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**', component:NopageFoundComponent},
  {path:'dashboard',component:PagesComponent},
  {path:'categorias',redirectTo:'/categoria'},
  {path:'add-categorias',redirectTo:'/add-categoria'}

]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
