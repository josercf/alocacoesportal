import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { RecursosListComponent } from './pages/recursos-list/recursos-list.component';
import { RecursoService } from './services/recurso-service';
import { RecursoAddComponent } from './pages/recurso-add/recurso-add.component';
import { DisciplinaService } from './services/disciplina-service';
import { CompetenciaComponent } from './components/competencia/competencia.component';
import { CampusService } from './services/campus-service';

@NgModule({
  declarations: [
    AppComponent,
    RecursosListComponent,
    RecursoAddComponent,
    CompetenciaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RecursoService,
    DisciplinaService,
    CampusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
