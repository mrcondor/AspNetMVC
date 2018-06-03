﻿using System.Collections.Generic;
using MyWebApp.AcessoDados.Entidades;

namespace MyWebApp.AcessoDados
{
    public interface IProdutoRepository
    {
        List<Produto> ListarProdutos();
    }
}