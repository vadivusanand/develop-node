import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { LoginService } from '../login/login.service';

@Module({
    controllers: [RegisterController],
    providers: [RegisterService, LoginService],
    exports: [RegisterService],
    imports: [],
})
export class RegisterModule {}
