import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnidadMedida } from '../models/unidad-medida';

@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaService {

  // Conexion al Api Server del Backend
 private baseURL= "http://localhost:8080/api/v1/unidadmedida";

 constructor( private httpClient: HttpClient) { }

 // Este metodo nos sirve para obtener las UnidadMedida
 listarUnidadMedidas(): Observable<UnidadMedida[]>{
   return this.httpClient.get<UnidadMedida[]>(`${this.baseURL}`);
 }
 // Este metodo nos sirrve para Registrar una UnidadMedida
 registrarUnidadMedida(unidadMedida:UnidadMedida):Observable<Object>{
   return this.httpClient.post(`${this.baseURL}`,unidadMedida);
 }

 //  Este motodo sirve para actualizar una UnidadMedida
 editarUnidadMedida(id:number, unidadMedida:UnidadMedida) : Observable<Object>{
   return this.httpClient.put(`${this.baseURL}/${id}`,unidadMedida);
 }

 //  Este metodo sirve para obtener los datos de un Item por ID
 obtenerUnidadMedidaPorId(id:number) : Observable<UnidadMedida>{
   return this.httpClient.get<UnidadMedida>(`${this.baseURL}/${id}`);
 }

 // Este metodo sirve para Eliminar un Registro
 eliminarUnidadMedida(id:number) : Observable<Object>{
   return this.httpClient.delete(`${this.baseURL}/${id}`);
 }
}
