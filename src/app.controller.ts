import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()  // express 의 get 역할과 같다.
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/hello")  // 데코레이터는 꾸며주는 함수나 클래스랑 붙어있어야 한다. // 그러니 밑에 빈칸을 두면 안된다.
  sayHello(): string {  // NestJs는 라우터 세팅하지 않아도 됨 굳;
    return this.appService.getHi()
  }
}