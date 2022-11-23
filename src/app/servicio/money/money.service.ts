import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {Money} from './money'

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoneyService {
//
  API : string = 'http://localhost/alegria/money.php'
//
  constructor(private clienteHttp:HttpClient) {}
//
  AgregarMoney(datosMoney:Money):Observable<any>{
      return this.clienteHttp.post(this.API+"?insertar=1",datosMoney);
    }
//
    ObservarMoney(){
      return this.clienteHttp.get(this.API);
    }
//
    BorrarMoney(id:Money):Observable<any>{
      return this.clienteHttp.get(this.API+"?borrar="+id);
    }
    ConsultarMoney(id:Money):Observable<any>{
      return this.clienteHttp.get(this.API+"?consultar="+id)
    }

    EditarMoney(id:any,datosMoney:Money):Observable<any>{
      return this.clienteHttp.post(this.API+"?actualizar="+id,datosMoney);
    }
}
