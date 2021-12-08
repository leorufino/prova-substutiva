import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Funcionario } from "../models/funcionario";

@Injectable({
    providedIn: "root",
})
export class FuncionarioService {
    private baseUrl = "http://localhost:5000/api/funcionario";

    constructor(private http: HttpClient) {}

    list(): Observable<Funcionario[]> {
        return this.http.get<Funcionario[]>(`${this.baseUrl}/list`);
    }
    create(funcionario: Funcionario): Observable<Funcionario> {
        return this.http.post<Funcionario>(`${this.baseUrl}/create`, funcionario);
    }
}
