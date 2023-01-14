import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // NestFactory é o responsável pela conexão do módulo e AppModule é o arquivo responsável por carregar os principais módulos.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Tudo que está na DTO, será adicionada ao projeto
      forbidNonWhitelisted: true, // Não permitir criar informações repetitivas ou fora do contexto
      transform: true, // Transformar os dados tipados com o DTO
    }),
  );
  await app.listen(3000);
}
bootstrap();
