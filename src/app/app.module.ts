import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { RecursosListComponent } from './pages/recursos-list/recursos-list.component';
import { RecursoAddComponent } from './pages/recurso-add/recurso-add.component';
import { CompetenciaComponent } from './components/competencia/competencia.component';
import { DisciplinaAddComponent } from './pages/disciplina-add/disciplina-add.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';

import { DisciplinaService } from './services/disciplina-service';
import { RecursoService } from './services/recurso-service';
import { CampusService } from './services/campus-service';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    RecursosListComponent,
    RecursoAddComponent,
    CompetenciaComponent,
    DisciplinaAddComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    RecursoService,
    DisciplinaService,
    CampusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
