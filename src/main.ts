import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  // app 모듈은 route 모듈 같은 것이다.
  await app.listen(3000);
}
bootstrap();
