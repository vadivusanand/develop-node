import { NestFactory } from '@nestjs/core';
import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
