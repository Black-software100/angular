import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import {FormGroup,FormBuilder} from '@angular/forms';

import { MoneyService } from 'src/app/servicio/money/money.service';

@Component({
  selector: 'app-money-edit',
  templateUrl: './money-edit.component.html',
  styleUrls: ['./money-edit.component.css']
})
export class MoneyEditComponent {
  elID:any;
  
  formularioMoney:FormGroup;
  
  constructor(
    private activeRouter:ActivatedRoute,
    private moneyService:MoneyService,
    private formulario:FormBuilder,
    private ruteador:Router
    ){

    this.elID=this.activeRouter.snapshot.paramMap.get('id')
    
    this.moneyService.ConsultarMoney(this.elID).subscribe(respuesta=>{
      
      this.formularioMoney.setValue({
        name:respuesta[0]['name'],
        money:respuesta[0]['money'],
        fn:respuesta[0]['fn']
      })
    });

    this.formularioMoney=this.formulario.group({
      name:[''],
      money:[''],
      fn:['']
    })

  }
  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formularioMoney.value);
   this.moneyService.EditarMoney(this.elID,this.formularioMoney.value).subscribe(()=>{
    this.ruteador.navigateByUrl('/Money');
   })
  }
}
