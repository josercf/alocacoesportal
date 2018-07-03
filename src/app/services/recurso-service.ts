import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Recurso } from "../models/recurso";
import { Injectable } from "@angular/core";

@Injectable()
export class RecursoService {

    private endpoint: string = environment.apiUrl + "/recursos";

    constructor(private http: HttpClient) { }

    public listar() {
        return this.http.get<Recurso[]>(this.endpoint);
    }

    public criar(model: Recurso) {
        return this.http.post(this.endpoint, model);
    }

    public alterar(model: Recurso) {
        return this.http.put(this.endpoint, model);
    }
}