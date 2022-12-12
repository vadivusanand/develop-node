import {
    Body,
    Controller,
    Delete,
    ForbiddenException,
    Get,
    HttpException,
    HttpStatus,
    Inject,
    Param,
    Patch,Post,Query,Render,Req,Res, UseFilters,UseInterceptors,
    UsePipes, ValidationPipe,
  } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
  import { Response } from 'express';
  import { CreateUserDto } from './dto/create-user.dto';
  import { LoginValidationPipe } from './login-validation.pipe';
  import {  LoginExceptionFilter } from './login.exception-filter';
  //import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
  import { Task, TaskStatus } from './login.model';
  import { LoginService } from './login.service';
  import { RegisterService } from '../register/register.service'
import { SaveLoginInterceptor } from './save-login.interceptor';
  
  @Controller('login')
  export class LoginController {
    // @Inject(RegisterService)
    // private readonly registerService:RegisterService;
    constructor(private loginService: LoginService) {}
    private users: CreateUserDto[] = []


    @Post()
    //@UsePipes(LoginValidationPipe)
    //@UseInterceptors(SaveLoginInterceptor)
    @UseFilters(new LoginExceptionFilter()) 
    createTask( 
      @Req() req:Request,
      @Res() res:Response,
      @Body(new LoginValidationPipe()) createTaskDto: CreateUserDto): Task {

        this.loginService.createTask(createTaskDto)
        // throw new HttpException('test http exception', HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE);          
        //res.render("login",{errorMessage: "Something bad happenned"});
        if(!!createTaskDto){
        
          res.render("hello", {username: createTaskDto.username, password: createTaskDto.password})
         
        }
        return this.loginService.createTask(createTaskDto);
        
    }
    @Get('/user')
      getAllTasks() {
        return this.loginService.getAllTasks();
    }

    // @Get('/register/user')
    // getAllUsers(){
    //     console.log('inside login reg controller')
    //     return this.registerService.getAllUsers()
    // }

    @Get(":username")
      @Render('hello')
      greetUser(@Param("username") username:string, @Res() res:Response){
        //  return {username: username};
         res.render("hello", {username: username})
    }

    @Get('/gethello')
    getHello(){
      if(this.loginService.getAllTasks().length > 0) {
        console.log('iam in gethello')
        return
      }
    }
  }

  