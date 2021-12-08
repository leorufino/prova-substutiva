using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/inicializar")]
    public class InicializarDadosController : ControllerBase
    {
        private readonly DataContext _context;
        public InicializarDadosController(DataContext context)
        {
            _context = context;
        }

        //POST: api/inicializar/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create()
        {
            _context.Funcionarios.AddRange(new Funcionario[]
                {
                    new Funcionario { FuncionarioId = 1, Nome = "Pedro Silva", Email = "p.silva@empresa.com" },
                    new Funcionario { FuncionarioId = 2, Nome = "João Antonio", Email = "j.antonio@empresa.com" },
                }
            );
            _context.SaveChanges();
            return Ok(new { message = "Dados inicializados com sucesso!" });
        }
    }
}