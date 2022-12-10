import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'nav-icon fas fa-tachometer-alt',
      submenu: []
    }
    ,
    {
      titulo: 'Usuarios',
      icono: 'nav-icon fas fa-users',
      submenu: [
        { titulo: 'Usuarios', url: 'usuarios', icono: 'fa fa-users' }
      ],
    }
    ,
    {
      titulo: 'Categorias',
      icono: 'nav-icon fas fa-list',
      submenu: [
        { titulo: 'Listar Categorias', url: 'categorias', icono: 'fa fa-list' },
        { titulo: 'Agregar Categoria', url: 'add-categorias', icono: 'fa fa-plus' },
      ],
    }
    ,
    {
      titulo: 'Productos',
      icono: 'nav-icon fas fa-boxes',
      submenu: [
        { titulo: 'Categorias', url: 'categorias', icono: 'fa fa-list' },
        { titulo: 'Productos', url: 'productos', icono: 'fa fa-cubes' },
      ],
    }

  ];
}
