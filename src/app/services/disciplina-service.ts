import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Disciplina } from "../models/disciplina";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DisciplinaService {

    private endpoint: string = environment.apiUrl + "/disciplinas";

    constructor(private http: HttpClient) { }

    public listar() {
        return this.http.get<Disciplina[]>(this.endpoint);
    }

    public criar(model: Disciplina) {
        return this.http.post(this.endpoint, model);
    }

    public alterar(model: Disciplina) {
        return this.http.put(this.endpoint, model);
    }
}