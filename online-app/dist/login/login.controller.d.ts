import { Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { Task } from './login.model';
import { LoginService } from './login.service';
export declare class LoginController {
    private loginService;
    constructor(loginService: LoginService);
    private users;
    createTask(req: Request, res: Response, createTaskDto: CreateUserDto): Task;
    getAllTasks(): Task[];
    greetUser(username: string, res: Response): void;
    getHello(): void;
}
