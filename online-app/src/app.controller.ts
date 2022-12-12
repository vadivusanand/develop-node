import { Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Get('/')
  @Render("index")
   welcome() {
    return
  }
  @Get('login')
  @Render("login")
   loginFunc() {
    return
  }

  @Get('login/gethello')
  @Render("hello")
   getFunc() {
    return
  }


  @Get('register')
  @Render("signup")
   gettFunc() {
    return
  }

  @Get('register/login')
  @Render("login")
   gettFuncc() {
    return
  }

}
