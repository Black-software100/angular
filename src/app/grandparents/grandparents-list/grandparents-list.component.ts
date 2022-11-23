import { Component,OnInit } from '@angular/core';

import { GrandparentService } from 'src/app/servicio/grandparents/grandparent.service';
@Component({
  selector: 'app-grandparents-list',
  templateUrl: './grandparents-list.component.html',
  styleUrls: ['./grandparents-list.component.css']
})
export class GrandparentsListComponent implements OnInit{
  Grandparent:any;

  constructor(
    private GrandparentService:GrandparentService
  ){}
//
  ngOnInit(): void {
    this.GrandparentService.ObservarGrandparent().subscribe(respuesta=>{
      console.log(respuesta);
      this.Grandparent=respuesta;
    });
  }
//
  BorraRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¡Desea borrar el registro?")){
      this.GrandparentService.BorrarGrandparent(id).subscribe((respuesta)=>{
        this.Grandparent.splice(iControl,1);
      })
    }
  }
}
