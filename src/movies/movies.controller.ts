import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll() {
        return "This will return all movies";
    }

    @Get("/:id")    // url 이름과 밑에 Param 이름은 같아야함 하지만 뒤에 타입 지정으로 나오는 이름은 달라도 됨
    getOne(@Param("id") moveiId:string) {
        return `This will return one movie with the id: ${moveiId}`;
    }

    @Post()
    create() {
        return "This will create a movie";
    }

    @Delete("/:id")
    remove(@Param("id") movieId:string) {
        return `This will delete a movie with the id: ${movieId}`;
    }

    @Patch("/:id")
    patch(@Param("id") movieId:string) {
        return `This will patch a movie with the id: ${movieId}`;
    }
    
}
