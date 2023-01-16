import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MoviesModule } from './movies.module';

@Module({ // 데코레이터 라고 말함 // 데코레이터는 클래스에 함수 기능을 추가할 수 있다.
  imports: [MoviesModule],  // 앱을 만들 때 모듈로 분리해야 좋음 -> 그래서 app.모듈에서 Movies 모듈을 import 하게 함
  controllers: [AppController], // url 을 가져오고 함수를 실행하는것  // express의 라우터 같은 존재
  providers: [],  // 
})
export class AppModule {}
