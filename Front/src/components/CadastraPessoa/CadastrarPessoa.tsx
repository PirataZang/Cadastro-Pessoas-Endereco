import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Style from './CadastrarPessoa.module.css';

function CadastrarPessoa() {
    const [pes_nome, setNome] = useState('');
    const [pes_sexo, setSexo] = useState('');
    const [pes_estado_civil, setEstado_civil] = useState('');
    const [pes_data_nascimento, setPes_data_nascimento] = useState('');
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/pessoa/new', { pes_nome, pes_sexo, pes_estado_civil, pes_data_nascimento });
            console.log('Pessoa Cadastrada com Sucesso');
            alert('Pessoa Cadastrada com Sucesso');
            setNome('');
        }
        catch (error) {
            alert('Erro ao realizar post:');
        }
    }

    // Seta o Sexo
    const handleSexoChange = (e: any) => {
        // Atualiza o estado com o valor selecionado
        setSexo(e.target.value);
    };

    const handleEstadoCivil = (e: any) => {
        setEstado_civil(e.target.value);
    }


    useEffect(() => {
        setNome('');
        setSexo('');
        setEstado_civil('');
        setPes_data_nascimento('');
    })


    return (
        <div>
            <h2>Informe os dados para a Pessoa ser Cadastrada</h2>
            <form onSubmit={handleSubmit} className={Style.Form}>
                <input type="text" value={pes_nome} className={Style.InputText} onChange={(e) => setNome(e.target.value)} placeholder='Digite o Nome' />
                <select name="Sexo" onChange={handleSexoChange} required={true} className={Style.InputList}>
                    <option value="" disabled selected hidden>Selecione o Sexo</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Não Identificado">Não Identificado</option>
                </select>
                <select name="EstadoCivil" onChange={handleEstadoCivil} required={true} className={Style.InputList}>
                    <option value="" disabled selected hidden>Selecione o Estado Civil:</option>
                    <option value="Solteiro">Solteiro</option>
                    <option value="Casado">Casado</option>
                    <option value="separado">Separado</option>
                    <option value="divorciado ">Divorciado</option>
                    <option value="viúvo">Viúvo</option>
                </select>
                <input type="date" name="dataNascimento" id="" onChange={(e) => setPes_data_nascimento(e.target.value)} className={Style.Input} />

                <button type='submit'>Criar Pessoa</button>
            </form>
            <button><Link to={'/'}> Voltar para Pagina Buscar Pessoa Unica</Link></button>
        </div>
    )
}

export default CadastrarPessoa