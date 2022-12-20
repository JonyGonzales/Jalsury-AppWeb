import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-list-categoria',
  templateUrl: './list-categoria.component.html',
  styleUrls: ['./list-categoria.component.css']
})
export class ListCategoriaComponent implements OnInit {

  categoria:Categoria[];

  constructor( private categoriaService:CategoriaService,private router:Router ) { }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  private obtenerCategorias(){
    this.categoriaService.listarCategorias().subscribe(dato => {
      this.categoria = dato;
    })
  }

  editarCategoria(id:number){
    this.router.navigate(['dashboard/edit-categoria',id]);
  }

  eliminarCategoria(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar la Categoria",
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
        this.categoriaService.eliminarCategoria(id).subscribe(dato => {
          console.log(dato);
          this.obtenerCategorias();
          swal(
            'Categoria eliminado',
            'La Categoria ha sido eliminada con exito',
            'success'
          )
        })
      }
    })
  }
}
