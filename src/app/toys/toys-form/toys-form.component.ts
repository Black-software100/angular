import { Component } from '@angular/core';
// importamos los matedos para el formulario
import {FormGroup,FormBuilder} from '@angular/forms';
// importamos los servicio
import { ToysService } from 'src/app/servicio/toys/toys.service';
@Component({
  selector: 'app-toys-form',
  templateUrl: './toys-form.component.html',
  styleUrls: ['./toys-form.component.css']
})
export class ToysFormComponent {

  //creamos el objecto del formulario reactivo
  FormularioToys:FormGroup;

  

  //
  constructor(
    public formulario:FormBuilder,
    private toysService:ToysService
  ){

    this.FormularioToys = this.formulario.group({
      // traemos  a cada uno de los inputos 
      name:[''],
      toys:[''],
      gender:[''],
      fn:['']
    });
  }
  
  enviarDatos():any{
    console.log(this.FormularioToys.value);
    // enviamos el formulario al metodo el .subscribe espara aplice los cambios
    this.toysService.AgregarToys(this.FormularioToys.value).subscribe()
  }
}
