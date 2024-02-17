import React from 'react'
import { Link } from 'react-router-dom'

const PaginaInicial = () => {
    return (
        <div>
            <h1>Pagina Inicial do Projeto</h1>
            <button>
                <Link to={'/CadastrarPessoa'}>Cadastrar Nova Pessoa</Link>
            </button>
            <button>
                <Link to={'/BuscaPessoaUnica'}>Buscar Pessoa</Link>
            </button>
            <button>
                <Link to={'/CadastrarEndereco'}>Cadastrar Novo Endereço</Link>
            </button>
        </div>
    )
}

export default PaginaInicial