import { Component, OnInit } from '@angular/core';

import { ChildrenService } from 'src/app/servicio/childrens/children.service';

@Component({
  selector: 'app-childre-list',
  templateUrl: './childre-list.component.html',
  styleUrls: ['./childre-list.component.css']
})


export class ChildreListComponent implements OnInit{
  Childs:any;

  constructor(
    private childrenService:ChildrenService
  ){}
//
  ngOnInit(): void {
    this.childrenService.ObservarChildren().subscribe(respuesta=>{
      console.log(respuesta);
      this.Childs=respuesta;
    });
  }
//
  BorraRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¡Desea borrar el registro?")){
      this.childrenService.Borrarchildren(id).subscribe((respuesta)=>{
        this.Childs.splice(iControl,1);
      })
    }
  }
}
