import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


interface buscaPessoaEndereco {
    end_id: Number,
    end_rua: String,
    end_bairro: String,
    end_cidade: String,
    pes_id: Number
}

function BuscaEnderecoPessoa() {

    const [PessoaEndereco, setPessoaEndereco] = useState<buscaPessoaEndereco | null>(null);
    const [id, setId] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const EnderecoPessoa = await axios.get(`http://localhost:5000/pessoa/endereco/${id}`);
            console.log('Dados retornados:', EnderecoPessoa.data);
            setPessoaEndereco(EnderecoPessoa.data[id]);
            console.log("Teste: ", PessoaEndereco);
        } catch (error) {
            alert('Não foi possível encontrar o Endereço da pessoa');
        }
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit} className="form">
                <input type="number" value={id} onChange={(e) => setId(e.target.value)} placeholder="Digite o ID" />
                <button type='submit'>Pesquisar</button>
                {PessoaEndereco && (
                    <div className="results">
                        <h2>Resultados Encotrados:</h2>
                        <p>Bairro: {PessoaEndereco.end_bairro}</p>
                        <p>Cidade: {PessoaEndereco.end_cidade}</p>
                    </div>
                )}
            </form>
            <button><Link to={'/'}>Voltar para a Pagina Inicial</Link></button>
        </>
    )
}

export default BuscaEnderecoPessoa