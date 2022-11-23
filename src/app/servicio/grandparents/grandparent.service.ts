import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {Grandparent} from './grandparents'

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrandparentService {


  API : string = 'http://localhost/alegria/grandparent.php'
  constructor(private clienteHttp:HttpClient) {}

  AgregarGrandparent(datosGraparent:Grandparent):Observable<any>{
      return this.clienteHttp.post(this.API+"?insertar=1",datosGraparent);
    }

    ObservarGrandparent(){
      return this.clienteHttp.get(this.API);
    }

    BorrarGrandparent(id:Grandparent):Observable<any>{
      return this.clienteHttp.get(this.API+"?borrar="+id);
    }
    ConsultarGrandparent(id:Grandparent):Observable<any>{
      return this.clienteHttp.get(this.API+"?consultar="+id)
    }

    EditarGrandparent(id:any,datoschildren:Grandparent):Observable<any>{
      return this.clienteHttp.post(this.API+"?actualizar="+id,datoschildren);
    }
}
