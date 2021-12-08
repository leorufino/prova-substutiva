import { Component, OnInit } from "@angular/core";
import { Funcionario } from "src/app/models/funcionario";
import { FuncionarioService } from "src/app/services/funcionario.service";

@Component({
    selector: "app-index",
    templateUrl: "./index.component.html",
    styleUrls: ["./index.component.css"],
})
export class IndexComponent implements OnInit {
    funcionarios: Funcionario[] = [];

    constructor(
        private funcionarioService: FuncionarioService,
    ) {}

    ngOnInit(): void {
        this.funcionarioService.list().subscribe((funcionarios) => {
            this.funcionarios = funcionarios;
        });
    }


}
