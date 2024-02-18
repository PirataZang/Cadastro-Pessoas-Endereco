export class CreatePessoaDto {
    pes_nome: string;
    pes_sexo: string;
    pes_estado_civil: string;
    pes_data_nascimento: string;

    constructor(pes_nome: string, pes_sexo: string, pes_estado_civil: string, pes_data_nascimento: string) {
        this.pes_nome = pes_nome;
        this.pes_sexo = pes_sexo;
        this.pes_estado_civil = pes_estado_civil;

        const data = new Date(pes_data_nascimento);
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();

        this.pes_data_nascimento = `${dia}-${mes}-${ano}`;
    }
}