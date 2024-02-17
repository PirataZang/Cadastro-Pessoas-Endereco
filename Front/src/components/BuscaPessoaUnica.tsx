import { useState } from 'react';
import axios from 'axios';
import '../App.css'
import { Link } from 'react-router-dom';
import Style from './BuscaPessoaUnica.module.css';

interface Pessoa {
    pes_id: number;
    pes_nome: string;
    pes_sexo: string;
    pes_estado_civil: string;
}

export default function BuscaPessoaUnica() {
    const [pessoa, setPessoa] = useState<Pessoa | null>(null);
    const [id, setId] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        // Busca pessoa pelo ID
        try {
            const responseId = await axios.get(`http://localhost:5000/pessoa/?id=${id}`);
            setPessoa(responseId.data[parseInt(id) - 1]);

            console.log('Dados adicionados com sucesso:');
        } catch (error) {
            console.error('Erro ao adicionar dados:', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        className= {Style.pesquisa}
                        type="number"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder="Digite o ID"
                    />
                </label>
                <button type='submit'>Pesquisar</button>
            </form>
            {pessoa && (
                <div className={Style.Results}>
                    <h2>Resultados Encotrados:</h2>
                    <h2>{pessoa.pes_nome}</h2>
                    <p>Sexo: {pessoa.pes_sexo}</p>
                    <p>Estado Civil: {pessoa.pes_estado_civil}</p>
                </div>
            )}
            <button>
                <Link to={'/CadastrarPessoa'}>Aceessar a Busca de Todas as Pessoas</Link>
            </button>
        </>
    );
}
