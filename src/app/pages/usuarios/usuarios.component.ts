import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

declare var $:any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit,OnDestroy {
  
  dtOptions: any= {};
  usuarios: Usuario[] = [];
  dtTrigger: Subject<any> = new Subject<any>();

  formSubmitted = false;
  Roles: any = ['admin', 'editor'];


  public cambioContrasena = this.fb.group({
    
    oldPassword:[''],
    newPassword:[''],

  });

  constructor(private usuarioSvc: UsuarioService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    
    this.obtenerUsuario();
    this.dtOptions = {
    
       pageLength: 10,
       searching: true,
       responsive:true,
       info:true,
       language: {url:'//cdn.datatables.net/plug-ins/1.13.1/i18n/es-MX.json'},
      
     };


  }

  obtenerUsuario(){
  
    // this.usuarioSvc.obtenerUsuarios().subscribe(dato => {
    //   this.usuarios = dato;


    this.usuarioSvc.obtenerUsuarios().subscribe((dato:any) =>{    
    this.usuarios =dato;
    this.dtTrigger.next(dato);

    });

  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}



