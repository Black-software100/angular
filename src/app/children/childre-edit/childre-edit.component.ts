import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';

import {FormGroup,FormBuilder} from '@angular/forms';

import { ChildrenService } from 'src/app/servicio/childrens/children.service';

@Component({
  selector: 'app-childre-edit',
  templateUrl: './childre-edit.component.html',
  styleUrls: ['./childre-edit.component.css']
})
export class ChildreEditComponent{
  elID:any;
  
  formularioChildren:FormGroup;
  constructor(
    private activeRouter:ActivatedRoute,
    private childrenService:ChildrenService,
    private formulario:FormBuilder,
    private ruteador:Router
    ){

    this.elID=this.activeRouter.snapshot.paramMap.get('id')
    
    this.childrenService.ConsultarChildren(this.elID).subscribe(respuesta=>{
      
      this.formularioChildren.setValue({
        first_name:respuesta[0]['first_name'],
        last_name:respuesta[0]['last_name'],
        fn:respuesta[0]['fn'],
        city:respuesta[0]['city']
      })
    });

    this.formularioChildren=this.formulario.group({
      first_name:[''],
      last_name:[''],
      fn:[''],
      city:['']
    })

  }
  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formularioChildren.value);
   this.childrenService.EditarChildren(this.elID,this.formularioChildren.value).subscribe(()=>{
    this.ruteador.navigateByUrl('/Children');
   })
  }
}
