import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';
import {tap} from 'rxjs/operators'
import { CambioPassword } from '../interfaces/cambio-password.interface';
import { EditForm } from '../interfaces/edit-form-interface';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

// http://localhost:8080/api/v1
//const URL = environment.urlServer;

const URL = 'http://localhost:8080/api/v1'

@Injectable({
 providedIn: 'root'
})
export class UsuarioService {

    constructor(private http:HttpClient) { }

   newUsuario(formData:RegisterForm){
    
     return this.http.post(`${URL}/usuarios`, formData, {responseType: 'text'}); 

   }

   login(formData:LoginForm){
      
     return this.http.post(`${URL}/auth/login`, formData).pipe(tap((res:any)=>{
       console.log(res);
       localStorage.setItem('token',res.token);
       localStorage.setItem('usuarioId', res.usuario.id);
       localStorage.setItem('nombre', res.usuario.nombre);
     })) 
  
   }


   obtenerUsuarios(): Observable<Usuario[]>{
        return this.http.get<Usuario[]>(`${URL}/usuarios`); 

   }

//   deleteUsuario(id:string){


    
//     let headers = new HttpHeaders({
//       'token': this.token
//     });

//     return this.http.delete(`${URL}/usuarios/${id}`, {headers}); 

//   }

//   cambioPassword(id:string, cambioPass:CambioPassword){

//     let headers = new HttpHeaders({
//       'token': this.token
//     });

//     return this.http.put(`${URL}/usuarios/cambio-password/${id}`, cambioPass, {headers, responseType:'text'} ); 

//   }

//   obtenerIdUsuario(id:string){
  
//     let headers = new HttpHeaders({
//       'token': this.token
//     });

//     return this.http.get(`${URL}/usuarios/${id}`,{headers});

//   }

//   editarUsuario(id:string, editData:EditForm){
//     let headers = new HttpHeaders({
//       'token': this.token
//     });

//     return this.http.put(`${URL}/usuarios/${id}`, editData, {headers});

//   }

}
