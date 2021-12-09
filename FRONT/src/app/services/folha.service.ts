import { Folha } from './../models/folha';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class FolhaService {
    private baseUrl = "http://localhost:5000/api/folha";

    constructor(private http: HttpClient) {}

    list(): Observable<Folha[]> {
        return this.http.get<Folha[]>(`${this.baseUrl}/list`);
    }
    create(folha: Folha): Observable<Folha> {
        return this.http.post<Folha>(`${this.baseUrl}/create`, folha);
    }
}
