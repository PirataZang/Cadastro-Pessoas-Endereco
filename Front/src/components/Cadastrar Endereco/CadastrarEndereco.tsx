import { useState } from 'react'
import { Link } from 'react-router-dom'
const CadastrarEndereco = () => {
    const [endereco, setEndereco] = useState({
        pes_id: '',
        end_logradouro: '',
        end_numero: '',
        end_bairro: '',
        end_cidade: '',
    });

    return (
        <div>
            <h1>Cadastro de Endereço:</h1>
        </div>
    )
}

export default CadastrarEndereco