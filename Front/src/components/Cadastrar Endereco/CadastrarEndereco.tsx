import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './CadastrarEndereco.module.css'

const CadastrarEndereco = () => {
    const [endereco, setEndereco] = useState({
        Pessoa: {
            where: {
                pes_id: '',
            }
        },
        end_logradouro: '',
        end_numero: '',
        end_bairro: '',
        end_cidade: '',
    });

    const handleEndereco = async (e: any) => {
        e.preventDefault();

        try {
            axios.post('http://localhost:5000/endereco/new', { endereco })
        }
        catch (error) {
            alert("Não Foi Possível Cadastrar o Endereço");
        }
    }
    return (
        <div>
            <h1>Cadastro de Endereço:</h1>
            <form onSubmit={handleEndereco}>
                <input type="number" value={endereco.Pessoa.where.pes_id} onChange={(e) => setEndereco({ ...endereco, Pessoa: { where: {pes_id: e.target.value} } })} placeholder='ID'className={style.Input} />
                <input type="text" value={endereco.end_bairro} onChange={(e) => setEndereco({ ...endereco, end_bairro: e.target.value })} placeholder='Bairro' className={style.Input}/>
                <input type="number" value={endereco.end_numero} onChange={(e) => setEndereco({ ...endereco, end_numero: e.target.value })} placeholder='Numero' className={style.Input}/>
                <input type="text" value={endereco.end_cidade} onChange={(e) => setEndereco({ ...endereco, end_cidade: e.target.value })} placeholder='Cidade'className={style.Input} />
                <input type="text" value={endereco.end_logradouro} onChange={(e) => setEndereco({ ...endereco, end_logradouro: e.target.value })} placeholder='Logradouro}' className={style.Input}/>
                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}

export default CadastrarEndereco