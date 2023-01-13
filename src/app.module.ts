import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({ // 데코레이터 라고 말함 // 데코레이터는 클래스에 함수 기능을 추가할 수 있다.
  imports: [],
  controllers: [MoviesController], // url 을 가져오고 함수를 실행하는것  // express의 라우터 같은 존재
  providers: [MoviesService],  // 
})
export class AppModule {}
