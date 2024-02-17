export declare class CreateEnderecoDto {
    end_rua: String;
    end_bairro: String;
    end_cidade: String;
    Pessoa: {
        where: {
            pes_id: Number;
        };
    };
}
