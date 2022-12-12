import { Task } from 'src/login/login.model';
import { LoginService } from './login.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class LoginController {
    private _loginService;
    constructor(_loginService: LoginService);
    private users;
    createTask(createTaskDto: CreateUserDto): Task;
    getAllTasks(data: CreateUserDto): void;
}
