import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import BuscaPessoaUnica from './components/BuscaPessoa/BuscaPessoaUnica'
import CadastrarPessoa from './components/CadastraPessoa/CadastrarPessoa'
import PaginaInicial from './components/routes/PaginaInicial'



const router = createBrowserRouter([
  {
    path: '/',
    element: <PaginaInicial/>,
    errorElement: <div>Não Foi Encontrado essa Pagina {':('}</div>
  },
  {
    path: '/CadastrarPessoa',
    element: <CadastrarPessoa/>
  },
  {
    path: '/BuscaPessoaUnica',
    element: <BuscaPessoaUnica/>
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
