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
        "mes",
        "ano",
        "nome",
        "email",
        "bruto",
        "ir",
        "inss",
        "fgts",
        "liquido"
    ];

    constructor(private service: FolhaService) {}

    ngOnInit(): void {
        this.service.list().subscribe((folhas) => {
            folhas.forEach(folha => {
                folha.bruto = folha.salario * folha.horas;
                if (folha.bruto > 4664.68) {
                    folha.ir = 869.36;
                } else if(folha.bruto > 3751.06) {
                    folha.ir = 636.13;
                } else if(folha.bruto > 2826.66 ) {
                    folha.ir = 354.80;
                } else if(folha.bruto > 2826.66 ) {
                    folha.ir = 354.80;
                } else if (folha.bruto > 1903.99) {
                    folha.ir = 354.80;
                } else {
                    folha.ir = 0;
                }
                if (folha.bruto > 5531.31) {
                    folha.inss = 608.44
                } else if (folha.bruto > 5531.31) {
                    folha.inss = folha.bruto * 0.11
                } else if (folha.bruto > 2765.66) {
                    folha.inss = folha.bruto * 0.09
                } else {
                    folha.inss = folha.bruto * 0.08
                }
                folha.fgts = folha.bruto * 0.08;
                folha.liquido = folha.bruto - folha.ir - folha.inss;

            });
            this.folhas = folhas;
        });
    }
}
