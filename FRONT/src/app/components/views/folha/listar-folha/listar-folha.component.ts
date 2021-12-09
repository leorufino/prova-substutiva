import { FolhaService } from 'src/app/services/folha.service';
import { Folha } from 'src/app/models/folha';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-listar-folha",
    templateUrl: "./listar-folha.component.html",
    styleUrls: ["./listar-folha.component.css"],
})
export class ListarFolhaComponent implements OnInit {
    folhas: Folha[] = [];
    colunasExibidas: String[] = [
        "id",
        "salario",
        "hora",
        "mes",
        "ano",
        "funcionario",
    ];

    constructor(private service: FolhaService) {}

    ngOnInit(): void {
        this.service.list().subscribe((folhas) => {
            this.folhas = folhas;
        });
    }
}
