import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insumos } from '../../models/insumos';
import { InsumosService } from '../../services/insumos.service';

@Component({
  selector: 'app-add-insumos',
  templateUrl: './add-insumos.component.html',
  styleUrls: ['./add-insumos.component.css']
})
export class AddInsumosComponent implements OnInit {

  insumos: Insumos = new Insumos();
  constructor(private insumosService: InsumosService,private router:Router) { }

  ngOnInit(): void {
  }

  addInsumos(){
    this.insumosService.registrarInsumos(this.insumos).subscribe(dato =>{
      console.log(dato);
      this.redirectToListInsumos();
    },error => console.log(error));

  }
  redirectToListInsumos(){  
    this.router.navigateByUrl('dashboard/insumos')
  }

  onSubmit(){
    this.addInsumos();
    console.log(this.insumos)
  }
  

}