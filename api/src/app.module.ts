import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoaModule } from './pessoa/pessoa.module';
import { EnderecoModule } from './endereco/endereco.module';

@Module({
  imports: [PessoaModule, EnderecoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
