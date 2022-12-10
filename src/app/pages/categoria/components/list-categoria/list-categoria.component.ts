import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-list-categoria',
  templateUrl: './list-categoria.component.html',
  styleUrls: ['./list-categoria.component.css']
})
export class ListCategoriaComponent implements OnInit {

  categoria:Categoria[];

  constructor( private categoriaService:CategoriaService ) { }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  private obtenerCategorias(){
    this.categoriaService.listarCategorias().subscribe(dato => {
      this.categoria =dato;
    })
  }

}
