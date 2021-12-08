import { Funcionario } from 'src/app/models/funcionario';
import { Component, OnInit } from "@angular/core";
import { FuncionarioService } from "src/app/services/funcionario.service";

@Component({
    selector: "app-listar-funcionario",
    templateUrl: "./listar-funcionario.component.html",
    styleUrls: ["./listar-funcionario.component.css"],
})
export class ListarFuncionarioComponent implements OnInit {
    funcionarios: Funcionario[] = [];
    colunasExibidas: String[] = [
        "id",
        "nome",
        "email",
        "cargo"
    ];

    constructor(private service: FuncionarioService) {}

    ngOnInit(): void {
        this.service.list().subscribe((funcionarios) => {
            this.funcionarios = funcionarios;
        });
    }
}
