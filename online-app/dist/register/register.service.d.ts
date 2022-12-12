import { CreateRegUserDto } from './dto/create-reg-user.dto';
import { User } from './registration.model';
export declare class RegisterService {
    private reguser;
    createRegUser(createRegUserDto: CreateRegUserDto): User;
    getAllUsers(): User[];
}
