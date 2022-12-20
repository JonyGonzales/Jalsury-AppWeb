import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Insumos } from '../models/insumos';

@Injectable({
  providedIn: 'root'
})
export class InsumosService {
  // Conexion al Api Server del Backend
  private baseURL= "http://localhost:8080/api/v1/insumos";

  constructor( private httpClient: HttpClient) { }

  // Este metodo nos sirve para obtener las Insumoss
  listarInsumoss(): Observable<Insumos[]>{
    return this.httpClient.get<Insumos[]>(`${this.baseURL}`);
  }
  // Este metodo nos sirrve para Registrar una Insumos
  registrarInsumos(insumos:Insumos):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,insumos);
  }

  //  Este motodo sirve para actualizar una Insumos
  editarInsumos(id:number, insumos:Insumos) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,insumos);
  }

  //  Este metodo sirve para obtener los datos de un Item por ID
  obtenerInsumosPorId(id:number) : Observable<Insumos>{
    return this.httpClient.get<Insumos>(`${this.baseURL}/${id}`);
  }

  // Este metodo sirve para Eliminar un Registro
  eliminarInsumos(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  }
