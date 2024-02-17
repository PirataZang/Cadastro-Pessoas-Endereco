import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar suporte a CORS para todas as origens
  app.enableCors();

  // Iniciar o servidor na porta 3000
  await app.listen(5000);
}

bootstrap();
