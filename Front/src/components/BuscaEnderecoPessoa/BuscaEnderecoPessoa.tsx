import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


interface buscaPessoaEndereco {
    end_id: Number,
    end_rua: String,
    end_bairro: String,
    end_numero: number,
    end_cidade: String,
    pes_id: Number
}

function BuscaEnderecoPessoa() {

    const [PessoaEnderecos, setPessoaEnderecos] = useState<buscaPessoaEndereco[] | []>([]);
    const [id, setId] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const EnderecoPessoa = await axios.get(`http://localhost:5000/pessoa/endereco/${id}`);
            setPessoaEnderecos(EnderecoPessoa.data);
            console.log(EnderecoPessoa.data);
        } catch (error) {
            alert('Não foi possível encontrar o Endereço da pessoa');
            
        }
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit} className="form">
                <input type="number" value={id} onChange={(e) => setId(e.target.value)} placeholder="Digite o ID" />
                <button type='submit'>Pesquisar</button>
                {PessoaEnderecos.length > 0 && (
                    <div className="results">
                        <h2>Resultados Encotrados:</h2>
                        {PessoaEnderecos.map((endereco: any) => (
                           <div key={endereco.end_id}>
                            <p>Rua:    {endereco.end_rua}</p>
                            <p>Bairro: {endereco.end_bairro}</p>
                            <p>Número: {endereco.end_numero}</p>
                            <p>Cidade: {endereco.end_cidade}</p>
                           </div>
                        ))}
                    </div>
                )}
            </form>
            <button><Link to={'/'}>Voltar para a Pagina Inicial</Link></button>
        </>
    )
}

export default BuscaEnderecoPessoa