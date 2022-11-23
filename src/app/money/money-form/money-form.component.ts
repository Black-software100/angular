import { Component } from '@angular/core';

import { MoneyService } from 'src/app/servicio/money/money.service';

import {FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-money-form',
  templateUrl: './money-form.component.html',
  styleUrls: ['./money-form.component.css']
})
export class MoneyFormComponent {
  FormularioMoney:FormGroup;


  //
  constructor(
    public formulario:FormBuilder,
    private moneyService:MoneyService
  ){

    this.FormularioMoney = this.formulario.group({
      name:[''],
      money:[''],
      fn:['']
    });
  }
  
  enviarDatos():any{
    console.log(this.FormularioMoney.value);
    this.moneyService.AgregarMoney(this.FormularioMoney.value).subscribe()
  }
}
