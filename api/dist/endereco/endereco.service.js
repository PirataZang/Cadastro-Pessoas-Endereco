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
exports.EnderecoService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../database/PrismaService");
let EnderecoService = class EnderecoService {
    constructor(Prisma) {
        this.Prisma = Prisma;
    }
    create(createEnderecoDto) {
        return this.Prisma.endereco.create({ data: createEnderecoDto });
    }
    findAll(id) {
        return this.Prisma.endereco.findMany({ where: { pes_id: id } });
    }
    findOne(id) {
        return this.Prisma.endereco.findUnique({ where: { end_id: Number(id) } });
    }
    update(id, updateEnderecoDto) {
        return this.Prisma.endereco.update({ where: { end_id: Number(id) }, data: updateEnderecoDto });
    }
    remove(id) {
        return this.Prisma.endereco.delete({ where: { end_id: id } });
    }
};
exports.EnderecoService = EnderecoService;
exports.EnderecoService = EnderecoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], EnderecoService);
//# sourceMappingURL=endereco.service.js.map