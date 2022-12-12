import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class MovieService {
    private idSeq;
    private users;
    constructor();
    findAll(): User[];
    findOne(id: number): User;
    update(id: number, updateUserDto: UpdateUserDto): User;
    remove(id: number): User;
}
