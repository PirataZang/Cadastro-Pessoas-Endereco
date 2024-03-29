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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaController = void 0;
const common_1 = require("@nestjs/common");
const pessoa_service_1 = require("./pessoa.service");
const create_pessoa_dto_1 = require("./dto/create-pessoa.dto");
const update_pessoa_dto_1 = require("./dto/update-pessoa.dto");
let PessoaController = class PessoaController {
    constructor(pessoaService) {
        this.pessoaService = pessoaService;
    }
    async create(createPessoaDto) {
        return this.pessoaService.create(createPessoaDto);
    }
    getEnderecoPessoa(idPessoa) {
        return this.pessoaService.getEnderecoPessoa(idPessoa);
    }
    findAll() {
        return this.pessoaService.findAll();
    }
    findOne(id) {
        return this.pessoaService.findOne(+id);
    }
    update(id, updatePessoaDto) {
        return this.pessoaService.update(+id, updatePessoaDto);
    }
    remove(id) {
        return this.pessoaService.remove(+id);
    }
};
exports.PessoaController = PessoaController;
__decorate([
    (0, common_1.Post)("new"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pessoa_dto_1.CreatePessoaDto]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('Endereco/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PessoaController.prototype, "getEnderecoPessoa", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PessoaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PessoaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pessoa_dto_1.UpdatePessoaDto]),
    __metadata("design:returntype", void 0)
], PessoaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PessoaController.prototype, "remove", null);
exports.PessoaController = PessoaController = __decorate([
    (0, common_1.Controller)('pessoa'),
    __metadata("design:paramtypes", [pessoa_service_1.PessoaService])
], PessoaController);
//# sourceMappingURL=pessoa.controller.js.map