import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
 // Conexion al Api Server del Backend
 private baseURL= "http://localhost:8080/api/v1/productos";

 constructor( private httpClient: HttpClient) { }

 // Este metodo nos sirve para obtener las Productos
 listarProductos(): Observable<Producto[]>{
   return this.httpClient.get<Producto[]>(`${this.baseURL}`);
 }
 // Este metodo nos sirrve para Registrar una Productoc
 registrarProducto(producto:Producto):Observable<Object>{
   return this.httpClient.post(`${this.baseURL}`,producto);
 }

 //  Este motodo sirve para actualizar una Producto
 editarProducto(id:number, producto:Producto) : Observable<Object>{
   return this.httpClient.put(`${this.baseURL}/${id}`,producto);
 }

 //  Este metodo sirve para obtener los datos de un Item por ID
 obtenerProductoPorId(id:number) : Observable<Producto>{
   return this.httpClient.get<Producto>(`${this.baseURL}/${id}`);
 }

 // Este metodo sirve para Eliminar un Registro
 eliminarProducto(id:number) : Observable<Object>{
   return this.httpClient.delete(`${this.baseURL}/${id}`);
 }
 }
