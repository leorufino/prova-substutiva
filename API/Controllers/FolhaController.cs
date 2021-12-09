using System;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/folha")]
    public class FolhaController : ControllerBase
    {
        private readonly DataContext _context;
        public FolhaController(DataContext context)
        {
            _context = context;
        }

        //POST: api/folha/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Folha folha)
        {  

            Folha folhaExistente = _context.Folhas.FirstOrDefault(u => u.Mes == folha.Mes && u.Ano == folha.Ano && u.FuncionarioId == folha.FuncionarioId);
            if (folhaExistente != null)
            {
                return BadRequest(new { message = "Este folha de pagamento já foi cadastrada" });
            }
            folha.Funcionario = _context.Funcionarios.Find(folha.FuncionarioId);
            _context.Folhas.Add(folha);
            _context.SaveChanges();
            return Created("", folha);
        }

        //DELETE: /api/produto/delete/id
        [HttpDelete]
        [Route("delete/{id}")]
        public IActionResult Delete([FromRoute] int id)
        {
            Folha folha = _context.Folhas.Find(id);

            if (folha == null)
            {
                return NotFound();
            }
            _context.Folhas.Remove(folha);
            _context.SaveChanges();
            return Ok(_context.Folhas.ToList());
        }

        //GET: api/folha/list
        [HttpGet]
        [Route("list")]
        public IActionResult List() =>
            Ok(_context.Folhas
            .Include(f => f.Funcionario)
            .ToList());

    }
}