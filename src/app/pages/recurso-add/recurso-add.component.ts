import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../../models/disciplina';
import { DisciplinaService } from '../../services/disciplina-service';
import { Recurso } from '../../models/recurso';
import { CampusService } from '../../services/campus-service';
import { Campus } from '../../models/campus';
import { Area } from '../../models/area';
import { RecursoService } from '../../services/recurso-service';
import { ModalService } from '../../services/modal-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recurso-add',
  templateUrl: './recurso-add.component.html',
  styleUrls: ['./recurso-add.component.css']
})
export class RecursoAddComponent implements OnInit {

  disciplinas: Disciplina[];
  campus: Campus[];
  area: Area[];

  custom: any ={};


  recurso: Recurso = new Recurso();
  novoTelefone: string;

  tabActive: string = "";
  tabs: any[] = [];

  constructor(private route: ActivatedRoute,
    private disciplinaService: DisciplinaService,
    private campusService: CampusService,
    private recursoService: RecursoService,
    private modalService: ModalService) {



    // this.route.params.subscribe(params => {
    //   if (params['id']) {
    //     this.recursoService.buscar(params['id'])
    //       .subscribe(res => this.recurso = res);
    //   }
    // });

    this.tabs.push(
      { title: "Competência", name: "competencia" },
      { title: "Características", name: "caracteristicas" },
      { title: "Feedbacks", name: "feedbacks" })

    this.tabActive = "competencia";
  }

  ngOnInit() {

    this.recurso = this.route.snapshot.data["recurso"] || new Recurso();

    this.custom = this.recurso.area.id;

    this.disciplinaService.listar()
      .subscribe(res => this.disciplinas = res);

    this.campusService.listar()
      .subscribe(res => this.campus = res);

    this.carregarAreas();

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

  carregarAreas() {
    this.area = [];
    this.area.push({ id: 1, descricao: "INFO" });
    this.area.push({ id: 2, descricao: "ENGLISH" });
    this.area.push({ id: 3, descricao: "PORTUGUÊS" });
  }

  tabSelect(tabName: string) {
    this.tabActive = tabName;
  }

  removerTelefone(index: number) {
    this.recurso.telefones.splice(index);
  }

  addTelefone() {
    this.recurso.telefones.push(this.novoTelefone);
    this.novoTelefone = "";
  }
  
  salvar() {

    //this.recurso.area = this.area.find()

   this.recurso.area = this.area.find(c => c.id === this.custom);
    console.log(this.recurso);
    return;

    if (this.recurso.key) {
      this.recursoService.alterar(this.recurso)
        .subscribe(res => this.modalService.show("Sucesso", "Dados salvos!"));

    } else {
      this.recursoService.criar(this.recurso)
        .subscribe(res => this.modalService.show("Sucesso", "Dados salvos!"));
    }
  }
}
