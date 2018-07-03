import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Campus } from "../models/campus";

@Injectable()
export class CampusService {

    private endpoint: string = "/assets/campis.json";

    constructor(private http: HttpClient) { }

    public listar() {
        return this.http.get<Campus[]>(this.endpoint);
    }
}