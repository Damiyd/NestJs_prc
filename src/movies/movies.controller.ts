import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moivesService: MoviesService) {}

    @Get()
    getAll(): Movie[] {
        return this.moivesService.getAll();
    }    
    
    @Get(":id")    // url 이름과 밑에 Param 이름은 같아야함 하지만 뒤에 타입 지정으로 나오는 이름은 달라도 됨
    getOne(@Param("id") movieId: number): Movie {
        console.log(typeof movieId)
        return this.moivesService.getOne(movieId)
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.moivesService.create(movieData);
    }

    @Delete(":id")
    remove(@Param("id") movieId:number) {
        return this.moivesService.deleteOne(movieId);
    }

    @Patch(":id")
    patch(@Param("id") movieId:number, @Body() updateData) {
        return this.moivesService.update(movieId, updateData);
    }


}
