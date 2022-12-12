import { Module } from '@nestjs/common';
import { RegisterController } from 'src/register/register.controller';
import { RegisterService } from 'src/register/register.service';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { RegisterModule } from '../register/register.module';

@Module({
    controllers: [LoginController, RegisterController],
    providers: [LoginService, RegisterService],
    imports: [RegisterModule],
  })
export class LoginModule {}
