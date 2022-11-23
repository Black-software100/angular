import { Component} from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import { ChildrenService } from 'src/app/servicio/childrens/children.service';
@Component({
  selector: 'app-childre-form',
  templateUrl: './childre-form.component.html',
  styleUrls: ['./childre-form.component.css']
})
export class ChildreFormComponent  {
  //
  FormularioChildren:FormGroup;


  //
  constructor(
    public formulario:FormBuilder,
    private childrenService:ChildrenService
  ){

    this.FormularioChildren = this.formulario.group({
      id:[''],
      first_name:[''],
      last_name:[''],
      fn:[''],
      city:['']
    });
  }
  
  enviarDatos():any{
    console.log(this.FormularioChildren.value);
    this.childrenService.AgregarChildren(this.FormularioChildren.value).subscribe()
  }
} 
