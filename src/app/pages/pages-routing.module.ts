import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/Dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

    // import { ListCategoriaComponent } from './categoria/components/list-categoria/list-categoria.component';
    // import { AddCategoriaComponent } from './categoria/components/add-categoria/add-categoria.component';
    // import { EditCategoriaComponent } from './categoria/components/edit-categoria/edit-categoria.component';
    // import { ListInsumosComponent } from './insumos/components/list-insumos/list-insumos.component';
    // import { AddInsumosComponent } from './insumos/components/add-insumos/add-insumos.component';
    // import { EditInsumosComponent } from './insumos/components/edit-insumos/edit-insumos.component';
    // import { ListProductoComponent } from './productos/components/list-producto/list-producto.component';

    // En este Modulo colocamos todas las ventanas que se exportaran como hijas del Dashboard solo dentro del Dashboard
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
        //   {
        //     path: 'productos',
        //     component: ListProductoComponent,
        //     data: { titulo: 'Productos' },
        //   },
        //   {
        //     path: 'categorias',
        //     component: ListCategoriaComponent,
        //     data: { titulo: 'Categorias' },
        //   },
        //   {
        //     path: 'add-categorias',
        //     component: AddCategoriaComponent,
        //     data: { titulo: 'Agregar Categoria' },
        //   },
        //   {
        //     path: 'edit-categoria/:id',
        //     component: EditCategoriaComponent,
        //     data: { titulo: 'Editar Categoria' },
        //   },
        //   {
        //     path: 'insumos',
        //     component: ListInsumosComponent,
        //     data: { titulo: 'Insumos' },
        //   },
        //   {
        //     path: 'add-insumos',
        //     component: AddInsumosComponent,
        //     data: { titulo: 'Agregar Insumos' },
        //   },
        //   {
        //     path: 'edit-insumos/:id',
        //     component: EditInsumosComponent,
        //     data: { titulo: 'Editar Insumos' },
        //   }
        ],
    },
    ];

    @NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
    })
    export class PagesRoutingModule {}
