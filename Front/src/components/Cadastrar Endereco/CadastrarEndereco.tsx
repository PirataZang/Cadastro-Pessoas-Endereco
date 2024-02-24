import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './CadastrarEndereco.module.css'

const CadastrarEndereco = () => {
    const [endereco, setEndereco] = useState({
        Pessoa: {
            connect: {
                pes_id: Number(0),
            }
        },
        end_rua: '',
        end_numero: Number(),
        end_bairro: '',
        end_cidade: '',
    });

    const handleEndereco = async (e: any) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/endereco/new', endereco);
            console.log(endereco);
            alert('Endereço Cadastrado com Sucesso');
            setEndereco({ ...endereco, end_rua: '', end_bairro: '', end_cidade: '', end_numero: Number(), Pessoa: { connect: { pes_id: 0 } } });
        }
        catch (error) {
            alert("Não Foi Possível Cadastrar o Endereço");
            console.log(endereco);
            console.log(JSON.stringify(endereco));
        }
    }
    return (
        <div>
            <h1>Cadastro de Endereço:</h1>
            <form onSubmit={handleEndereco}>
                <div className={style.CadastrarEndereco}>
                    <input type="number" value={endereco.Pessoa.connect.pes_id} onChange={(e) => setEndereco({ ...endereco, Pessoa: { connect: { pes_id: parseInt(e.target.value) } } })} placeholder='ID da Pessoa' className={style.Input} />
                    <input type="text" value={endereco.end_bairro} onChange={(e) => setEndereco({ ...endereco, end_bairro: e.target.value })} placeholder='Bairro' className={style.Input} />
                    <input type="number" value={endereco.end_numero} onChange={(e) => setEndereco({ ...endereco, end_numero: parseInt(e.target.value) })} placeholder='Numero' className={style.Input} />
                    <input type="text" value={endereco.end_cidade} onChange={(e) => setEndereco({ ...endereco, end_cidade: e.target.value })} placeholder='Cidade' className={style.Input} />
                    <input type="text" value={endereco.end_rua} onChange={(e) => setEndereco({ ...endereco, end_rua: e.target.value })} placeholder='Logradouro' className={style.Input} />
                    <button type='submit'>Cadastrar</button>
                </div>
            </form>

            <button><Link to={'/'}>Voltar para a Pagina Inicial</Link></button>
        </div>
    )
}

export default CadastrarEndereco