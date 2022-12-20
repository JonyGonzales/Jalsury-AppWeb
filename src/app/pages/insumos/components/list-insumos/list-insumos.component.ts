import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Insumos } from '../../models/insumos';
import { InsumosService } from '../../services/insumos.service';

@Component({
  selector: 'app-list-insumos',
  templateUrl: './list-insumos.component.html',
  styleUrls: ['./list-insumos.component.css']
})
export class ListInsumosComponent implements OnInit {

  insumos:Insumos[];

  constructor( private insumosService:InsumosService,private router:Router ) { }

  ngOnInit(): void {
    this.obtenerInsumoss();
  }

  private obtenerInsumoss(){
    this.insumosService.listarInsumoss().subscribe(dato => {
      this.insumos = dato;
    })
  }

  editarInsumos(id:number){
    this.router.navigate(['dashboard/edit-insumos',id]);
  }

  eliminarInsumos(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar la Insumos",
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
        this.insumosService.eliminarInsumos(id).subscribe(dato => {
          console.log(dato);
          this.obtenerInsumoss();
          swal(
            'Insumos eliminado',
            'La Insumos ha sido eliminada con exito',
            'success'
          )
        })
      }
    })
  }
}
