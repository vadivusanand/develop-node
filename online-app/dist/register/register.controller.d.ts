import { CreateRegUserDto } from './dto/create-reg-user.dto';
import { RegisterService } from './register.service';
import { LoginService } from '../login/login.service';
import { User } from './registration.model';
import { Response } from 'express';
export declare class RegisterController {
    private registerService;
    private loginService;
    constructor(registerService: RegisterService, loginService: LoginService);
    private regusers;
    createUser(req: Request, res: Response, createRegUserDto: CreateRegUserDto): User;
    getAllUsers(): User[];
}
