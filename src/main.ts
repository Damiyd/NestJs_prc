import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  // app 모듈은 route 모듈 같은 것이다.
  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,  // 우리가 원하는 실제타입으로 바꿔줌
  }),
  ); // pipe는 미들웨어 같은 느낌이다.
  await app.listen(3000);
}
bootstrap();
