using System;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/funcionario")]
    public class FuncionarioController : ControllerBase
    {
        private readonly DataContext _context;
        //Construtor
        public FuncionarioController(DataContext context) => _context = context;

        //POST: api/funcionario/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Funcionario funcionario)
        {
            Funcionario funcionarioExistente = _context.Funcionarios.FirstOrDefault(u => u.Email == funcionario.Email);
            if (funcionarioExistente != null)
            {
                return BadRequest(new { message = "Este funcionário já está cadastrado" });
            }
            _context.Funcionarios.Add(funcionario);
            _context.SaveChanges();
            return Created("", funcionario);
        }

        //GET: api/funcionario/list
        [HttpGet]
        [Route("list")]
        public IActionResult List() =>
            Ok(_context.Funcionarios
            .ToList());

    }
}