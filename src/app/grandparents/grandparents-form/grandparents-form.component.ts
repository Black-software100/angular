import { Component } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import {GrandparentService} from 'src/app/servicio/grandparents/grandparent.service'
@Component({
  selector: 'app-grandparents-form',
  templateUrl: './grandparents-form.component.html',
  styleUrls: ['./grandparents-form.component.css']
})
export class GrandparentsFormComponent {

  FormularioChildrens:FormGroup;


  //
  constructor(
    public formulario:FormBuilder,
    private grandparentService:GrandparentService
  ){
    //
    this.FormularioChildrens = this.formulario.group({
      id:[''],
      first_name:[''],
      last_name:[''],
      fn:[''],
      city:['']
    });
  }
  //
  enviarDatos():any{
    console.log(this.FormularioChildrens.value);
    this.grandparentService.AgregarGrandparent(this.FormularioChildrens.value).subscribe()
  }
}
