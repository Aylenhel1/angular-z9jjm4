import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { FormCursosComponent } from './form-cursos/form-cursos.component';
import { FormInscripcionesComponent } from './form-inscripciones/form-inscripciones.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCursosComponent,
    FormCursosComponent,
    FormInscripcionesComponent,
    ListaPersonasComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'lista-cursos', component: ListaCursosComponent},
      {path: 'form-cursos', component: FormCursosComponent},
      {path: 'form-inscripciones', component: FormInscripcionesComponent},
      {path: 'lista-personas', component: ListaPersonasComponent},
      {path: '', redirectTo: '/form-cursos', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/