export declare class CreateEnderecoDto {
    end_rua: string;
    end_bairro: string;
    end_cidade: string;
    pessoa: {
        connect: {
            pes_id: number;
        };
    };
}
