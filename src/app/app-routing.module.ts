import { Component, NgModule } from '@angular/core';
//
import { RouterModule, Routes } from '@angular/router';
//
import { ChildreEditComponent } from './children/childre-edit/childre-edit.component';
import { ChildreFormComponent } from './children/childre-form/childre-form.component';
import { ChildreListComponent } from './children/childre-list/childre-list.component';
//
import { GrandparentsListComponent } from './grandparents/grandparents-list/grandparents-list.component';
import { GrandparentsEditComponent } from './grandparents/grandparents-edit/grandparents-edit.component';
import { GrandparentsFormComponent } from './grandparents/grandparents-form/grandparents-form.component';
//
import { MoneyListComponent } from './money/money-list/money-list.component';
import { MoneyFormComponent } from './money/money-form/money-form.component';
import { MoneyEditComponent } from './money/money-edit/money-edit.component';
//
import { ToysListComponent } from './toys/toys-list/toys-list.component';
import { ToysEditComponent } from './toys/toys-edit/toys-edit.component';
import { ToysFormComponent } from './toys/toys-form/toys-form.component';

import { InformacionComponent } from './informacion/informacion.component';

const routes: Routes = [
  {path:'Children',component:InformacionComponent },
  //
  {path:'Children',component:ChildreListComponent},
  {path:'Children_Agregar',component:ChildreFormComponent},
  {path:'Children_Edit/:id',component:ChildreEditComponent},
  //
  {path:'Grandparents',component:GrandparentsListComponent},
  {path:'Grandparents_Edit/:id',component:GrandparentsEditComponent},
  {path:'Grandparents_Agregar',component:GrandparentsFormComponent},

  {path:'Toys',component:ToysListComponent},
  {path:'Toys_Edit/:id',component:ToysEditComponent},
  {path:'Toys_Agregar',component:ToysFormComponent},

  {path:'Money',component:MoneyListComponent},
  {path:'Money_Edit/:id',component:MoneyEditComponent},
  {path:'Money_Agregar',component:MoneyFormComponent},
];
//
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//
export class AppRoutingModule { }
