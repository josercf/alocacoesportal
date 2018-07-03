import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Disciplina } from '../../models/disciplina';
import { DisciplinaService } from '../../services/disciplina-service';

@Component({
  selector: 'app-competencia',
  templateUrl: './competencia.component.html',
  styleUrls: ['./competencia.component.css']
})
export class CompetenciaComponent implements OnInit {

  @Output() 
  public onItemClicked = new EventEmitter<Disciplina>();

  disciplinas: Disciplina[];
  constructor(private disciplinaService: DisciplinaService) {
  }

  ngOnInit() {
    this.disciplinaService.listar()
      .subscribe(res => this.disciplinas = res);
  }

  competenciaClick(item: Disciplina) {
    this.onItemClicked.emit(item);
  }
}
