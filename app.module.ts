import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity' 
import { UserService } from './user/user.service';
import { AuthModule } from './auth/auth.module';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'pass@word1',
    database: 'my_schema', 
    entities: [],
    autoLoadEntities: true,
    synchronize: true
  }), UserModule, AuthModule],
 
  controllers: [AppController],
  providers: [AppService]
})

// @Module({
//   imports: [AuthModule],
//   controllers: [AppController, AuthController],
//   providers: [AppService],
// })
export class AppModule {
  constructor(private dataSource:DataSource){}
}
