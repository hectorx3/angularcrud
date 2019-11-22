import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './rol/components/lista/lista.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarComponent } from './rol/conteiners/agregar/agregar.component';
import { EditarComponent } from './rol/conteiners/editar/editar.component';
import { RolComponent } from './rol/conteiners/rol.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    NotFoundComponent,
    AgregarComponent,
    EditarComponent,
    RolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
