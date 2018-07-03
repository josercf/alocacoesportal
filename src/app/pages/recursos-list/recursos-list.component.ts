import { Component, OnInit } from '@angular/core';
import { Recurso } from '../../models/recurso';
import { RecursoService } from '../../services/recurso-service';

@Component({
  selector: 'app-recursos-list',
  templateUrl: './recursos-list.component.html',
  styleUrls: ['./recursos-list.component.css']
})
export class RecursosListComponent implements OnInit {

  recursos: Recurso[];

  constructor(private recursoService: RecursoService) { }

  ngOnInit() {

    this.recursoService.listar()
      .subscribe(res => this.recursos = res);
  }

}
