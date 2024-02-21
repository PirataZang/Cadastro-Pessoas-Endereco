"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../database/PrismaService");
let PessoaService = class PessoaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createPessoaDto) {
        const Pessoa = this.prisma.pessoa.create({ data: createPessoaDto });
        return Pessoa;
    }
    findAll() {
        return this.prisma.pessoa.findMany();
    }
    getEnderecoPessoa(idPessoa) {
        return this.prisma.endereco.findMany({ where: { pes_id: Number(idPessoa) } });
    }
    findOne(id) {
        return this.prisma.pessoa.findUnique({ where: { pes_id: Number(id) } });
    }
    update(id, updatePessoaDto) {
        return this.prisma.pessoa.update({ where: { pes_id: Number(id) }, data: updatePessoaDto });
    }
    remove(id) {
        return this.prisma.pessoa.delete({ where: { pes_id: Number(id) } });
    }
};
exports.PessoaService = PessoaService;
exports.PessoaService = PessoaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], PessoaService);
//# sourceMappingURL=pessoa.service.js.map