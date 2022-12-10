import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})
export class AddCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria();
  constructor(private categoriaService:CategoriaService,private router:Router) { }

  ngOnInit(): void {
  }

  addCategoria(){
    this.categoriaService.registrarCategoria(this.categoria).subscribe(dato =>{
      console.log(dato);
      this.redirectToListCategoria();
    },error => console.log(error));

  }
  redirectToListCategoria(){  
    this.router.navigateByUrl('dashboard/categorias')
  }

  onSubmit(){
    this.addCategoria();
    console.log(this.categoria)
  }
  

}
