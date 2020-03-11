import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaService } from './pessoa/pessoa.service';
import { PessoaCursoComponent } from './pessoa-curso/pessoa-curso.component';
import { PessoaCursoService } from './pessoa-curso/pessoa-curso.service';
import { CursoComponent } from './curso/curso.component';
import { CursoService } from './curso/curso.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PessoaCrudComponent } from './pessoa/pessoa-crud/pessoa-crud.component';
import { Pessoa } from './pessoa/pessoa';
import { NgxMaskModule } from 'ngx-mask';

const ROUTES: Route[] = [
  { path: '', component: PessoaComponent },
  { path: 'home', component: PessoaComponent },
  { path: 'pessoacrud', component: PessoaCrudComponent },
  { path: 'pessoacurso', component: PessoaCursoComponent },
  { path: 'curso', component: CursoComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [
    AppComponent,
    PessoaComponent,
    PessoaCrudComponent,
    PessoaCursoComponent,
    CursoComponent
  ],
  providers: [
    Pessoa,
    PessoaService,
    PessoaCursoService,
    CursoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
