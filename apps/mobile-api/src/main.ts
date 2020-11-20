import { NestApplicationOptions } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const appOptions = {
    cors: {
      exposedHeaders: ['Link'],
    },
  } as NestApplicationOptions;

  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    appOptions,
  );

  await app.listen(1000);
}
bootstrap();
