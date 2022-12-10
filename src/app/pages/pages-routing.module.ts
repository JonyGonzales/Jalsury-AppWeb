import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { ListCategoriaComponent } from './categoria/components/list-categoria/list-categoria.component';
import { AddCategoriaComponent } from './categoria/components/add-categoria/add-categoria.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { titulo: 'Dashboard' },
      },
      {
        path: 'usuarios',
        component: UsuariosComponent,
        data: { titulo: 'Usuarios' },
      },
      {
        path: 'productos',
        component: ProductosComponent,
        data: { titulo: 'Productos' },
      },
      {
        path: 'categorias',
        component: ListCategoriaComponent,
        data: { titulo: 'Categorias' },
      },
      {
        path: 'add-categorias',
        component: AddCategoriaComponent,
        data: { titulo: 'Agregar Categoria' },
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
