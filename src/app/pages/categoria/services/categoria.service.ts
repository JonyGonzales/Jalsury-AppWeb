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

  constructor( private httpClient: HttpClient) { }

  // Este metodo nos sirve para obtener las Categorias
  listarCategorias(): Observable<Categoria[]>{
    return this.httpClient.get<Categoria[]>(`${this.baseURL}`);
  }
  // Este metodo nos sirrve para Registrar una Categoria
  registrarCategoria(categoria:Categoria):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,categoria);
  }

  //  Este motodo sirve para actualizar una Categoria
  editarCategoria(id:number, categoria:Categoria) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,categoria);
  }

  //  Este metodo sirve para obtener los datos de un Item por ID
  obtenerCategoriaPorId(id:number) : Observable<Categoria>{
    return this.httpClient.get<Categoria>(`${this.baseURL}/${id}`);
  }

  // Este metodo sirve para Eliminar un Registro
  eliminarCategoria(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  }
