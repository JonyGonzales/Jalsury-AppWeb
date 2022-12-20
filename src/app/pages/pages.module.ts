import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ListCategoriaComponent } from './categoria/components/list-categoria/list-categoria.component'
import { AddCategoriaComponent } from './categoria/components/add-categoria/add-categoria.component';
import { EditCategoriaComponent } from './categoria/components/edit-categoria/edit-categoria.component';

import { ListInsumosComponent } from './insumos/components/list-insumos/list-insumos.component';
import { AddInsumosComponent } from './insumos/components/add-insumos/add-insumos.component';
import { EditInsumosComponent } from './insumos/components/edit-insumos/edit-insumos.component';

import { ListProductoComponent } from './productos/components/list-producto/list-producto.component';
import { AddProductoComponent } from './productos/components/add-producto/add-producto.component';
import { EditProductoComponent } from './productos/components/edit-producto/edit-producto.component';



@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    PagesComponent,
    AddCategoriaComponent,
    ListCategoriaComponent,
    EditCategoriaComponent,
    ListInsumosComponent,
    AddInsumosComponent,
    EditInsumosComponent,
    ListProductoComponent,
    AddProductoComponent,
    EditProductoComponent,
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
    AddCategoriaComponent,
    ListCategoriaComponent,
    EditCategoriaComponent,
    ListInsumosComponent,
    AddInsumosComponent,
    EditInsumosComponent,
    ListProductoComponent,
    AddProductoComponent,
    EditProductoComponent
    
  ]
})
export class PagesModule { }
