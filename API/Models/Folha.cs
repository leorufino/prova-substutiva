using System;

namespace API.Models
{
    public class Folha
    {
        public Folha() => CriadoEm = DateTime.Now;
        public int FolhaId { get; set; }
        public double Salario { get; set; }
        public int Horas { get; set; }
        public string Ano { get; set; }
        public string Mes { get; set; }
        public int FuncionarioId { get; set; }
        public Funcionario Funcionario { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}