import { forwardRef, HttpException, HttpStatus, Inject, Injectable, Module } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { regUserDTO } from '../users/dto/regUser.dto';
import { loginDTO } from '../users/dto/login.dto';
import { changepassDTO } from '../users/dto/changepass.dto';
import { UsersModule } from 'src/users/users.module';


@Injectable()
export class AuthService {
    constructor(
        public UsersService:UsersService,public JwtService:JwtService
){}

    async validateUser(username: string, pass: string): Promise<any> {
           const founduser= await this.UsersService.usercheck(username)
            if (!founduser) {
                throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);    
            }
            if (founduser && founduser.password === pass) {
                return founduser;
              }
              return null;
             }

     async generatetoken(login:loginDTO){
        const {username}=login;
        const payload= {username};
        const token=await this.JwtService.sign(payload);
        return {token:token}
  }
}
