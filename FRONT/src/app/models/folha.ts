import { Funcionario } from 'src/app/models/funcionario';

export interface Folha {
    folhaId?: number;
    salario: number;
    horas: number;
    ano: number;
    mes: number;
    funcionarioId: number;
    funcionario?: Funcionario;
    criadoem?: string;
}