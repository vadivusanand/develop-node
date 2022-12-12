import { CreateUserDto } from 'src/login/dto/create-user.dto';
import { Task } from 'src/login/login.model';
export declare class LoginService {
    private readonly registerService;
    private idSeq;
    private tasks;
    constructor();
    getAllTasks(): Task[];
    createTask(createTaskDto: CreateUserDto): Task;
}
