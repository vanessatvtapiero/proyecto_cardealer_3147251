import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,// lanza un error si el cliente (body) llegan atributos no estipulados en el dto

      forbidNonWhitelisted: true,// ignora atributos no relacionados en el dto: tienen que tener una validacion

      transform: true,// transforma los tipos de datos segun el dto
    })
  );

  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);

}
//botstrap
bootstrap();
