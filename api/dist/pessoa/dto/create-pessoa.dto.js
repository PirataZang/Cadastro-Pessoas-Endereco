"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePessoaDto = void 0;
class CreatePessoaDto {
    constructor(pes_nome, pes_sexo, pes_estado_civil, pes_data_nascimento) {
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
exports.CreatePessoaDto = CreatePessoaDto;
//# sourceMappingURL=create-pessoa.dto.js.map