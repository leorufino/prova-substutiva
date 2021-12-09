import { FolhaService } from 'src/app/services/folha.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from 'src/app/models/funcionario';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Folha } from "src/app/models/folha";

@Component({
    selector: "app-cadastrar-folha",
    templateUrl: "./cadastrar-folha.component.html",
    styleUrls: ["./cadastrar-folha.component.css"],
})
export class CadastrarFolhaComponent implements OnInit {
    salario!: number;
    horas!: number;
    mes!: string;
    ano!: string;
    funcionarioId!: number;
    funcionarios!: Funcionario[];

    constructor(
        private router: Router,
        private folhaService: FolhaService,
        private funcionarioService: FuncionarioService
    ) {}

    ngOnInit(): void {
        this.funcionarioService.list().subscribe((funcionarios) => {
            this.funcionarios = funcionarios;
        });
    }

    cadastrar(): void {
        let folha: Folha = {
            salario: this.salario,
            horas: this.horas,
            mes: this.mes,
            ano: this.ano,
            funcionarioId: this.funcionarioId,
        };

        this.folhaService.create(folha).subscribe((folha) => {
            this.router.navigate(["folha/listar"]);
        });
    }
}
