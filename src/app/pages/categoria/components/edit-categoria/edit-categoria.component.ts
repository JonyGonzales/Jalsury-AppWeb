import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent implements OnInit {

  id:number;
  categoria: Categoria = new Categoria();
  constructor(private categoriaService:CategoriaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoriaService.obtenerCategoriaPorId(this.id).subscribe(dato =>{
      this.categoria = dato;
    },error => console.log(error));
  }

  redirectToListCategoria(){  
    this.router.navigateByUrl('dashboard/categorias')
    swal('Categoria actualizada',`La Categoria ${this.categoria.nombre} ha sido actualizada con exito`,`success`);
  }

  onSubmit(){
    this.categoriaService.editarCategoria(this.id,this.categoria).subscribe(dato => {
      this.redirectToListCategoria();
    },error => console.log(error));
  }
}
