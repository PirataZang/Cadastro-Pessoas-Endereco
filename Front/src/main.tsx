import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import BuscaPessoaUnica from './components/BuscaPessoaUnica'
import CadastrarPessoa from './components/CadastraPessoa/CadastrarPessoa'


const router = createBrowserRouter([
  {
    path: '/',
    element: <BuscaPessoaUnica/>,
    errorElement: <div>Não Foi Encontrado essa Pagina {':('}</div>
  },
  {
    path: '/CadastrarPessoa',
    element: <CadastrarPessoa/>
  },
  {
    path: '/CreateEndereco',
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
