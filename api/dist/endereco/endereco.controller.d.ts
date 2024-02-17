import { EnderecoService } from './endereco.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Prisma } from '@prisma/client';
export declare class EnderecoController {
    private readonly enderecoService;
    constructor(enderecoService: EnderecoService);
    create(createEnderecoDto: CreateEnderecoDto): Prisma.Prisma__EnderecoClient<{
        end_id: number;
        end_rua: string;
        end_bairro: string;
        end_cidade: string;
        pes_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Prisma.PrismaPromise<{
        end_id: number;
        end_rua: string;
        end_bairro: string;
        end_cidade: string;
        pes_id: number;
    }[]>;
    findOne(id: string): Prisma.Prisma__EnderecoClient<{
        end_id: number;
        end_rua: string;
        end_bairro: string;
        end_cidade: string;
        pes_id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateEnderecoDto: UpdateEnderecoDto): Prisma.Prisma__EnderecoClient<{
        end_id: number;
        end_rua: string;
        end_bairro: string;
        end_cidade: string;
        pes_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): Prisma.Prisma__EnderecoClient<{
        end_id: number;
        end_rua: string;
        end_bairro: string;
        end_cidade: string;
        pes_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
