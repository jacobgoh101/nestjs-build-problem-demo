import { NestApplicationOptions } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const appOptions = {} as NestApplicationOptions;

  const app = await NestFactory.create(AppModule, appOptions);

  await app.listen(2000);
}
bootstrap();
