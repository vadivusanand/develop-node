import { Body, Controller, Get, Inject, Module, Param, Post, Render, Res, ValidationPipe } from '@nestjs/common';
//import { Response } from 'express';
import { Task } from 'src/login/login.model';
import { LoginService } from './login.service';
import  { CreateUserDto } from './dto/create-user.dto' 

@Controller('login')

export class LoginController {
   constructor(private _loginService: LoginService){}
  //  return `Created a new post with values of ${JSON.stringify(body)}`;
  private users: CreateUserDto[] = []


  @Post()
  createTask(@Body() createTaskDto: CreateUserDto): Task {
    console.log(createTaskDto)
    return this._loginService.createTask(createTaskDto);
  }

  @Get()
  getAllTasks(@Body() data:CreateUserDto) {
      console.log("get Data   ", data)
     // return this._loginService.findAll();
  }

//    @Post()
//    createUser(@Body() data:CreateUserDto) {
//        return this._loginService.create(data)
//         //this.users.push(data)
//        //console.log(data)
//       // console.log('post data  ', this.users)
//        //return this.users
//     // return data
//    }

  

    // @Post()
    // create(@Body() createUserDto: CreateUserDto){
    //     console.log(createUserDto)
    //     return this.loginService.create(createUserDto);
        
    // }


   
    
}




