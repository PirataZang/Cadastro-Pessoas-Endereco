import { PrismaService } from 'src/database/PrismaService';
export declare class PessoaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPessoaDto: any): import(".prisma/client").Prisma.Prisma__PessoaClient<{
        pes_id: number;
        pes_nome: string;
        pes_sexo: string;
        pes_estado_civil: string;
        pes_data_nascimento: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        pes_id: number;
        pes_nome: string;
        pes_sexo: string;
        pes_estado_civil: string;
        pes_data_nascimento: string;
    }[]>;
    getEnderecoPessoa(idPessoa: Number): import(".prisma/client").Prisma.PrismaPromise<{
        end_id: number;
        end_rua: string;
        end_bairro: string;
        end_cidade: string;
        pes_id: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PessoaClient<{
        pes_id: number;
        pes_nome: string;
        pes_sexo: string;
        pes_estado_civil: string;
        pes_data_nascimento: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updatePessoaDto: any): import(".prisma/client").Prisma.Prisma__PessoaClient<{
        pes_id: number;
        pes_nome: string;
        pes_sexo: string;
        pes_estado_civil: string;
        pes_data_nascimento: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__PessoaClient<{
        pes_id: number;
        pes_nome: string;
        pes_sexo: string;
        pes_estado_civil: string;
        pes_data_nascimento: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
