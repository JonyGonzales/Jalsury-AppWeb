import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})
export class ListProductoComponent implements OnInit {

  producto : Producto[];

  constructor( private productoService:ProductoService,private router:Router ) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  private obtenerProductos(){
    this.productoService.listarProductos().subscribe(dato => {
      this.producto = dato;
    })
  }

  editarProducto(id:number){
    this.router.navigate(['dashboard/edit-producto',id]);
  }

  eliminarProducto(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el Producto",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.productoService.eliminarProducto(id).subscribe(dato => {
          console.log(dato);
          this.obtenerProductos();
          swal(
            'Producto eliminado',
            'El Producto ha sido eliminada con exito',
            'success'
          )
        })
      }
    })
  }
}
