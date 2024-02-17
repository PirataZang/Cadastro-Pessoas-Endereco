import { PessoaService } from './pessoa.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
export declare class PessoaController {
    private readonly pessoaService;
    constructor(pessoaService: PessoaService);
    create(createPessoaDto: CreatePessoaDto): Promise<{
        pes_id: number;
        pes_nome: string;
        pes_sexo: string;
        pes_estado_civil: string;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        pes_id: number;
        pes_nome: string;
        pes_sexo: string;
        pes_estado_civil: string;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PessoaClient<{
        pes_id: number;
        pes_nome: string;
        pes_sexo: string;
        pes_estado_civil: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updatePessoaDto: UpdatePessoaDto): import(".prisma/client").Prisma.Prisma__PessoaClient<{
        pes_id: number;
        pes_nome: string;
        pes_sexo: string;
        pes_estado_civil: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PessoaClient<{
        pes_id: number;
        pes_nome: string;
        pes_sexo: string;
        pes_estado_civil: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
