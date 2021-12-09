import { Funcionario } from 'src/app/models/funcionario';

export interface Folha {
    folhaId?: number;
    salario: number;
    horas: number;
    ano: string;
    mes: string;
    funcionarioId: number;
    funcionario?: Funcionario;
    criadoem?: string;
    bruto?: number;
    liquido?: number;
    inss?: number;
    fgts?: number;
    ir?: number;
}