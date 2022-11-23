import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//
import { ChildreListComponent } from './children/childre-list/childre-list.component';
import { ChildreEditComponent } from './children/childre-edit/childre-edit.component';
import { ChildreFormComponent } from './children/childre-form/childre-form.component';
//
import { GrandparentsListComponent } from './grandparents/grandparents-list/grandparents-list.component';
import { GrandparentsEditComponent } from './grandparents/grandparents-edit/grandparents-edit.component';
import { GrandparentsFormComponent } from './grandparents/grandparents-form/grandparents-form.component';
//
import { InformacionComponent } from './informacion/informacion.component';
//
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import{HttpClientModule} from '@angular/common/http';
//
import { ToysListComponent } from './toys/toys-list/toys-list.component';
import { ToysFormComponent } from './toys/toys-form/toys-form.component';
import { ToysEditComponent } from './toys/toys-edit/toys-edit.component';
//
import { MoneyEditComponent } from './money/money-edit/money-edit.component';
import { MoneyListComponent } from './money/money-list/money-list.component';
import { MoneyFormComponent } from './money/money-form/money-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildreListComponent,
    ChildreEditComponent,
    ChildreFormComponent,
    GrandparentsListComponent,
    GrandparentsEditComponent,
    GrandparentsFormComponent,
    InformacionComponent,
    ToysListComponent,
    ToysFormComponent,
    ToysEditComponent,
    MoneyEditComponent,
    MoneyListComponent,
    MoneyFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
