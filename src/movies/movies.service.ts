import { Injectable, NotAcceptableException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: number): Movie {
        const movie = this.movies.find(movie => movie.id === id) // +id 는 movie 컨트롤에서 타입을 스트링으로 해줬는데 이곳에서 +id를 해줘서 url 경로를 number로 만들어준것이다. 반대로 +string 이면 number 로 변환된다.
        if(!movie) {
            throw new NotAcceptableException(`Movie with ID: ${id} not found.`);
        }
        return movie;
    }

    deleteOne(id: number) {
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== id)
    }

    create(movieData: CreateMovieDto) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData,
        })
    }

    update(id:number, updateData) {
        const moive = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...moive, ...updateData});
    }
}
