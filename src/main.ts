import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './components/app/app.module';
import AllExceptionsFilter from './components/filter/exeption.filter';
async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('GOVORILNIA')
    .setDescription('The govorilnia chat`s API description')
    .setVersion('0.0.1')
    .addTag('Govorilnia chat`s')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(5000);
}
bootstrap();
