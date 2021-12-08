import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from 'src/app/models/funcionario';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-cadastrar-funcionario",
    templateUrl: "./cadastrar-funcionario.component.html",
    styleUrls: ["./cadastrar-funcionario.component.css"],
})
export class CadastrarFuncionarioComponent implements OnInit {
    nome!: string;
    email!: string;
    cargo!: string;

    constructor(
        private router: Router,
        private funcionarioService: FuncionarioService,
    ) {}

    ngOnInit(): void {
    }

    cadastrar(): void {
        let funcionario: Funcionario = {
            nome: this.nome,
            email: this.email,
            cargo: this.cargo
        };
        this.funcionarioService.create(funcionario).subscribe((funcionario) => {
            console.log(funcionario);
            this.router.navigate(["funcionario/listar"]);
        });
    }
}
