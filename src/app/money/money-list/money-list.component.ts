import { Component } from '@angular/core';

import { MoneyService } from 'src/app/servicio/money/money.service';

@Component({
  selector: 'app-money-list',
  templateUrl: './money-list.component.html',
  styleUrls: ['./money-list.component.css']
})
export class MoneyListComponent {
  Money:any;

  constructor(
    private moneyService:MoneyService
  ){}
//
  ngOnInit(): void {
    this.moneyService.ObservarMoney().subscribe(respuesta=>{
      console.log(respuesta);
      this.Money=respuesta;
    });
  }
//
  BorraRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¡Desea borrar el registro?")){
      this.moneyService.BorrarMoney(id).subscribe((respuesta)=>{
        this.Money.splice(iControl,1);
      })
    }
  }
}
