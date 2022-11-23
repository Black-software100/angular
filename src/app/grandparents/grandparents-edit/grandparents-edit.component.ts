import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import {FormGroup,FormBuilder} from '@angular/forms';

import { GrandparentService } from 'src/app/servicio/grandparents/grandparent.service';

@Component({
  selector: 'app-grandparents-edit',
  templateUrl: './grandparents-edit.component.html',
  styleUrls: ['./grandparents-edit.component.css']
})
export class GrandparentsEditComponent {
  elID:any;
  
  formularioGrandparent:FormGroup;
  
  constructor(
    private activeRouter:ActivatedRoute,
    private grandparentService:GrandparentService,
    private formulario:FormBuilder,
    private ruteador:Router
    ){

    this.elID=this.activeRouter.snapshot.paramMap.get('id')
    
    this.grandparentService.ConsultarGrandparent(this.elID).subscribe(respuesta=>{
      
      this.formularioGrandparent.setValue({
        first_name:respuesta[0]['first_name'],
        last_name:respuesta[0]['last_name'],
        fn:respuesta[0]['fn'],
        city:respuesta[0]['city']
      })
    });

    this.formularioGrandparent=this.formulario.group({
      first_name:[''],
      last_name:[''],
      fn:[''],
      city:['']
    })

  }
  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formularioGrandparent.value);
   this.grandparentService.EditarGrandparent(this.elID,this.formularioGrandparent.value).subscribe(()=>{
    this.ruteador.navigateByUrl('/Grandparents');
   })
  }
}
