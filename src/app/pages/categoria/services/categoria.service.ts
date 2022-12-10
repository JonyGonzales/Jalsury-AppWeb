import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  // Conexion al Api Server del Backend
  private baseURL= "http://localhost:8080/api/v1/categorias";

  constructor( private httClient: HttpClient) { }

  // Este metodo nos sirve para obtener las Categorias
  listarCategorias(): Observable<Categoria[]>{
    return this.httClient.get<Categoria[]>(`${this.baseURL}`);
  }
  // Este metodo nos sirrve para Registrar una Categoria
  registrarCategoria(categoria:Categoria):Observable<Object>{
    return this.httClient.post( `${this.baseURL}`,categoria);
  }
}
