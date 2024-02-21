import { Injectable } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class PessoaService {
  constructor(private prisma: PrismaService) { }

  create(createPessoaDto) {
    const Pessoa = this.prisma.pessoa.create({data: createPessoaDto});
    return Pessoa;
  }

  findAll() {
    return this.prisma.pessoa.findMany();
  }

  getEnderecoPessoa(idPessoa: Number) {
    return this.prisma.endereco.findMany({where: {pes_id: Number(idPessoa)}})
  }

  findOne(id: number) {
    return this.prisma.pessoa.findUnique({where: {pes_id: Number(id)}});
  }

  update(id: number, updatePessoaDto) {
    return this.prisma.pessoa.update({where: {pes_id: Number(id)}, data: updatePessoaDto});
  }

  remove(id: number) {
    return this.prisma.pessoa.delete({where: {pes_id: Number(id)}})
  }
}
