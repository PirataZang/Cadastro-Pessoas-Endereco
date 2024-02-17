import { PrismaService } from 'src/database/PrismaService';
export declare class EnderecoService {
    private Prisma;
    constructor(Prisma: PrismaService);
    create(createEnderecoDto: any): import(".prisma/client").Prisma.Prisma__EnderecoClient<{
        end_id: number;
        end_rua: string;
        end_bairro: string;
        end_cidade: string;
        pes_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(id: any): import(".prisma/client").Prisma.PrismaPromise<{
        end_id: number;
        end_rua: string;
        end_bairro: string;
        end_cidade: string;
        pes_id: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__EnderecoClient<{
        end_id: number;
        end_rua: string;
        end_bairro: string;
        end_cidade: string;
        pes_id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateEnderecoDto: any): import(".prisma/client").Prisma.Prisma__EnderecoClient<{
        end_id: number;
        end_rua: string;
        end_bairro: string;
        end_cidade: string;
        pes_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__EnderecoClient<{
        end_id: number;
        end_rua: string;
        end_bairro: string;
        end_cidade: string;
        pes_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
