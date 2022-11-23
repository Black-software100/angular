import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import {FormGroup,FormBuilder} from '@angular/forms';

import { ToysService } from 'src/app/servicio/toys/toys.service';

@Component({
  selector: 'app-toys-edit',
  templateUrl: './toys-edit.component.html',
  styleUrls: ['./toys-edit.component.css']
})
export class ToysEditComponent {
  elID:any;

  FormularioToys:FormGroup;

  constructor(
    private activeRouter:ActivatedRoute,
    private toysService:ToysService,
    private formulario:FormBuilder,
    private ruteador:Router
    ){
// obtenemos el id del campo
      this.elID=this.activeRouter.snapshot.paramMap.get('id')

      this.toysService.ConsultarToys(this.elID).subscribe(respuesta=>{
      
        this.FormularioToys.setValue({
          // desepaqutamos el json y le damos la parametro al input
          name:respuesta[0]['name'],
          toys:respuesta[0]['toys'],
          gender:respuesta[0]['gender'],
          fn:respuesta[0]['fn']
        })
      })

    this.FormularioToys = this.formulario.group({
      name:[''],
      toys:[''],
      gender:[''],
      fn:['']
    });
  
    }
  enviarDatos():any{
    console.log(this.elID);
    console.log(this.FormularioToys.value);
   this.toysService.EditarToys(this.elID,this.FormularioToys.value).subscribe(()=>{
    this.ruteador.navigateByUrl('/Toys')});
  }
}
