import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class EnderecoService {

  constructor (private Prisma: PrismaService) {}

  create(createEnderecoDto) {
    return this.Prisma.endereco.create({data: createEnderecoDto});
  }

  findAll() {
    return this.Prisma.endereco.findMany();
  }

  findOne(id: number) {
    return this.Prisma.endereco.findUnique({where: {end_id: Number(id)}});
  }

  update(id: number, updateEnderecoDto) {
    return this.Prisma.endereco.update({where: {end_id: Number(id)}, data: updateEnderecoDto});
  }

  remove(id: number) {
    return this.Prisma.endereco.delete({where: {end_id: id}});
  }
}
