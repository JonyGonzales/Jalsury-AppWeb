import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.router.navigateByUrl('dashboard'); 
    }

}



// import { Component} from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { UsuarioService } from '../../services/usuario.service';
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
    
//   public loginForm = this.fb.group({

//     email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
//     password: ['', [Validators.required]],
//     remember: [false]

//   });


//   constructor(private router: Router, private fb: FormBuilder, private usuarioSvc: UsuarioService) { }

//   login() {

//    console.log(this.loginForm.value);
//    this.usuarioSvc.login(this.loginForm.value).subscribe(res => {
      
//     if (this.loginForm.get('remember').value) {

//       localStorage.setItem('email', this.loginForm.get('email').value );
      
//     }else{
//       localStorage.removeItem('email');
//     }

//     this.router.navigateByUrl('/dashboard');

//    }, (err)=>{
//      Swal.fire('Error', err.error.message, 'error' );
//    });

//   }

// }
