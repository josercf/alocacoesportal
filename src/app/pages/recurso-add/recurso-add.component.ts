import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../../models/disciplina';
import { DisciplinaService } from '../../services/disciplina-service';
import { Recurso } from '../../models/recurso';
import { CampusService } from '../../services/campus-service';
import { Campus } from '../../models/campus';
import { Area } from '../../models/area';

@Component({
  selector: 'app-recurso-add',
  templateUrl: './recurso-add.component.html',
  styleUrls: ['./recurso-add.component.css']
})
export class RecursoAddComponent implements OnInit {

  disciplinas: Disciplina[];
  campus: Campus[];
  area: Area[];
  
  recurso: Recurso = new Recurso();
  novoTelefone: string;

  tabActive: string = "";
  tabs: any[] = [];

  constructor(private disciplinaService: DisciplinaService,
    private campusService: CampusService) {

      this.carregarAreas();

    this.recurso.competencias = [];
    this.recurso.telefones = [];

    this.tabs.push(
      { title: "Competencia", name: "competencia" },
      { title: "Características", name: "caracteristicas" },
      { title: "Feedbacks", name: "feedbacks" })
  }

  ngOnInit() {
    this.disciplinaService.listar()
      .subscribe(res => this.disciplinas = res);

      this.campusService.listar()
      .subscribe(res => this.campus = res);
  }

  competenciaClick(item: Disciplina) {
    let index = this.recurso.competencias.indexOf(item);

    if (index > -1) {
      this.recurso.competencias.splice(index, 1);
    }
    else {
      this.recurso.competencias.push(item);
    }

  }

  carregarAreas(){
    this.area = [];
    this.area.push({id: 1, descricao: "INFO"});
    this.area.push({id: 2, descricao: "ENGLISH"});
    this.area.push({id: 3, descricao: "PORTUGUÊS"});
  }

  tabSelect(tabName: string) {
    this.tabActive = tabName;
  }

  removerTelefone(index: number){
    this.recurso.telefones.splice(index);
  }

  addTelefone(){
    this.recurso.telefones.push(this.novoTelefone);
    this.novoTelefone = "";
  }

  salvar() {
    alert(JSON.stringify(this.recurso));
  }
}
