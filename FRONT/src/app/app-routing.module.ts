import { ListarFuncionarioComponent } from './components/views/funcionario/listar-funcionario/listar-funcionario.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./components/views/home/index/index.component";
import { CadastrarFuncionarioComponent } from "./components/views/funcionario/cadastrar-funcionario/cadastrar-funcionario.component";

const routes: Routes = [
    {
        path: "",
        component: IndexComponent,
    },
    {
        path: "funcionario/listar",
        component: ListarFuncionarioComponent,
    },
    {
        path: "funcionario/cadastrar",
        component: CadastrarFuncionarioComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
