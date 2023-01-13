import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()  // express 의 get 역할과 같다.
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/hello")
  sayHello(): string {
    return "Hello everyone";
  }
}