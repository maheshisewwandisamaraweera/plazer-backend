import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 // app.use(express.json());
  await app.listen(3001);
}
bootstrap();
