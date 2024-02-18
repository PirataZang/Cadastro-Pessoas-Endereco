import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './CadastrarEndereco.module.css'

const CadastrarEndereco = () => {
    const [endereco, setEndereco] = useState({
        Pessoa: {
            connect: {
                pes_id: ''
            },
        },
    });
    // const [endereco, setEndereco] = useState({
    //     Pessoa: {
    //         connect: {
    //             pes_id: '',
    //         }
    //     },
    //     end_logradouro: '',
    //     end_numero: '',
    //     end_bairro: '',
    //     end_cidade: '',
    // });

    const [end_rua, setEnd_rua] = useState('');
    const [end_numero, setEnd_numero] = useState('');
    const [end_bairro, setEnd_bairro] = useState('');
    const [end_cidade, setEnd_cidade] = useState('');

    const handleEndereco = async (e: any) => {
        e.preventDefault();

        try {
            axios.post('http://localhost:5000/endereco/new', {end_rua, end_bairro, end_cidade, end_numero, endereco});
            console.log(endereco, end_rua, end_numero, end_bairro, end_cidade);
        }
        catch (error) {
            alert("Não Foi Possível Cadastrar o Endereço");
        }
    }
    return (
        <div>
            <h1>Cadastro de Endereço:</h1>
            <form onSubmit={handleEndereco}>
                {/* <input type="number" value={endereco.Pessoa.connect.pes_id} onChange={(e) => setEndereco({ ...endereco, Pessoa: { connect: {pes_id: e.target.value} } })} placeholder='ID da Pessoa'className={style.Input} />
                <input type="text" value={endereco.end_bairro} onChange={(e) => setEndereco({ ...endereco, end_bairro: e.target.value })} placeholder='Bairro' className={style.Input}/>
                <input type="number" value={endereco.end_numero} onChange={(e) => setEndereco({ ...endereco, end_numero: e.target.value })} placeholder='Numero' className={style.Input}/>
                <input type="text" value={endereco.end_cidade} onChange={(e) => setEndereco({ ...endereco, end_cidade: e.target.value })} placeholder='Cidade'className={style.Input} />
                <input type="text" value={endereco.end_logradouro} onChange={(e) => setEndereco({ ...endereco, end_logradouro: e.target.value })} placeholder='Logradouro' className={style.Input}/> */}
                <input type="number" value={endereco.Pessoa.connect.pes_id} onChange={(e) => setEndereco({ ...endereco, Pessoa: { connect: { pes_id: e.target.value } } })} placeholder='ID da Pessoa' className={style.Input} />
                <input type="text" value={end_bairro} onChange={(e) => setEnd_bairro(e.target.value)} placeholder='Bairro' className={style.Input} />
                <input type="number" value={end_cidade} onChange={(e) => setEnd_cidade(e.target.value)} placeholder='Numero' className={style.Input} />
                <input type="text" value={end_numero} onChange={(e) => setEnd_numero(e.target.value)} placeholder='Cidade' className={style.Input} />
                <input type="text" value={end_rua} onChange={(e) => setEnd_rua(e.target.value)} placeholder='Logradouro' className={style.Input} />
                <button type='submit'>Cadastrar</button>
            </form>

            <button><Link to={'/'}>Voltar para a Pagina Inicial</Link></button>
        </div>
    )
}

export default CadastrarEndereco