import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { RegisterService } from './register/register.service';
import { RegisterController } from './register/register.controller';
import { RegisterModule } from './register/register.module';
import { LoginService } from './login/login.service';

@Module({
  imports: [LoginModule, RegisterModule],
  controllers: [AppController, RegisterController],
  providers: [AppService, RegisterService, LoginService],
})
export class AppModule {}
