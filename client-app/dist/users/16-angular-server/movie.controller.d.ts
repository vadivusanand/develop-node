import { UpdateUserDto } from "./dto/update-user.dto";
import { MovieService } from './movie.service';
interface Movie {
    id: number;
    title: string;
    rating: number;
    director?: string;
}
export declare class MovieController {
    private readonly movieService;
    movies: Movie[];
    constructor(movieService: MovieService);
    findAll(): import("./entities/user.entity").User[];
    findOne(id: string): import("./entities/user.entity").User;
    update(id: string, updateUserDto: UpdateUserDto): import("./entities/user.entity").User;
    remove(id: string): import("./entities/user.entity").User;
}
export {};
