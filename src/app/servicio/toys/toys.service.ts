import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {Toys} from './Toys'

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ToysService {

//
API : string = 'http://localhost/alegria/toys.php'
//
  constructor(private clienteHttp:HttpClient) {}
//
  AgregarToys(datosToys:Toys):Observable<any>{
      return this.clienteHttp.post(this.API+"?insertar=1",datosToys);
    }
// metodo para listar los juguetes
    ObservarToys(){
      return this.clienteHttp.get(this.API);
    }
//metodo para borrar un reguistro
    BorrarToys(id:Toys):Observable<any>{
      return this.clienteHttp.get(this.API+"?borrar="+id);
    }
//metodo para consultar un registro
    ConsultarToys(id:Toys):Observable<any>{
      return this.clienteHttp.get(this.API+"?consultar="+id)
    }
// metodo para editar un registro
    EditarToys(id:any,datostoy:Toys):Observable<any>{
      return this.clienteHttp.post(this.API+"?actualizar="+id,datostoy);
    }
}
