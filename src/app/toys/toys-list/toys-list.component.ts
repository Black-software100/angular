import { Component, OnInit } from '@angular/core';

import { ToysService } from 'src/app/servicio/toys/toys.service';

@Component({
  selector: 'app-toys-list',
  templateUrl: './toys-list.component.html',
  styleUrls: ['./toys-list.component.css']
})
export class ToysListComponent implements OnInit {
  Toys:any;

  constructor(
    private toysService:ToysService
  ){}
//
  ngOnInit(): void {
    this.toysService.ObservarToys().subscribe(respuesta=>{
      console.log(respuesta);
      this.Toys=respuesta;
    });
  }
//
  BorraRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¡Desea borrar el registro?")){
      this.toysService.BorrarToys(id).subscribe((respuesta)=>{
        this.Toys.splice(iControl,1);
      })
    }
  }
}
