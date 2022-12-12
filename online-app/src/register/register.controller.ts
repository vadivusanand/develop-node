import {
    Body,
    Controller,
    Delete,
    ForbiddenException,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Patch,
    Post,
    Query,
    Render,
    Req,
    Res,
    UseFilters,
    UseInterceptors,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
import { CreateRegUserDto } from './dto/create-reg-user.dto';
import { RegisterService } from './register.service';
import { LoginService } from '../login/login.service';
import { User } from './registration.model';
import { Response } from 'express';
import { RegValidationPipe } from './register-validation.pipe';
import {LoginValidationPipe } from '../login/login-validation.pipe'
import { Task } from 'src/login/login.model';


@Controller('register')
export class RegisterController {
    constructor(
        private registerService:RegisterService,
        private loginService:LoginService
    ) {}
    private regusers: CreateRegUserDto[] = []
    @Post()
    
    createUser(
        @Req() req:Request,
        @Res() res:Response,
        @Body(new RegValidationPipe()) createRegUserDto:CreateRegUserDto): User{
            if(!!createRegUserDto ){
                res.redirect("login")
            }
       console.log(this.loginService.getAllTasks())
        return this.registerService.createRegUser(createRegUserDto)
    }

    @Get('/user')
    getAllUsers(){
        console.log(this.regusers)
        return this.registerService.getAllUsers()
    }

}
