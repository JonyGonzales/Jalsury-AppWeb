import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { ListCategoriaComponent } from './categoria/components/list-categoria/list-categoria.component'
import { AddCategoriaComponent } from './categoria/components/add-categoria/add-categoria.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent,
    PagesComponent,
    AddCategoriaComponent,
    ListCategoriaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    FormsModule
        
  ],
  exports: [
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent,
    AddCategoriaComponent,
    ListCategoriaComponent
    
  ]
})
export class PagesModule { }
