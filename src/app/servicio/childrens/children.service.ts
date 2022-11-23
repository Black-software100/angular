import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {Children} from './Children'

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChildrenService {

  API : string = 'http://localhost/alegria/childs.php'
  constructor(private clienteHttp:HttpClient) {}
//
    AgregarChildren(datoschildren:Children):Observable<any>{
      return this.clienteHttp.post(this.API+"?insertar=1",datoschildren);
    }
//
    ObservarChildren(){
      return this.clienteHttp.get(this.API);
    }
//
    Borrarchildren(id:Children):Observable<any>{
      return this.clienteHttp.get(this.API+"?borrar="+id);
    }
    ConsultarChildren(id:Children):Observable<any>{
      return this.clienteHttp.get(this.API+"?consultar="+id)
    }

    EditarChildren(id:any,datoschildren:Children):Observable<any>{
      return this.clienteHttp.post(this.API+"?actualizar="+id,datoschildren);
    }
}
