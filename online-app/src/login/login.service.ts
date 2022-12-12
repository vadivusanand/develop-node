import { Get, Inject, Injectable, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/login/dto/create-user.dto';
import { Task } from 'src/login/login.model';
import { RegisterService } from 'src/register/register.service';
import {User} from './entities/user.entity'


@Injectable()
export class LoginService {

  @Inject(RegisterService)
  private readonly registerService:RegisterService;


//   public findRegUser(id: string): any {
//  //   const getRegUsers: string[] = this.registerService.getAllUsers();

//     return { id, getRegUsers, name: `Player ${id}` };
//   }

  // private users: User[] = []
    private idSeq = 0;
    //private users: CreateUserDto[] = []
    private tasks: Task[] = [];
  //  private stasks: Task[] = [];
    constructor() {console.log(CreateUserDto) }
   
    getAllTasks(){
      console.log('service', this.tasks)
      return [...this.tasks];
    }
    
    createTask(createTaskDto: CreateUserDto): Task {
      const { username, password } = createTaskDto;
      const task: Task = {
       // id: uuid(),
        username,
        password,
        //email
      };
      this.tasks.push(task);
      return task;
    }

   
  

    // findAll():Task[]{
    //   console.log('tasksssss',this.tasks)
    //     return this.tasks
    // }


  //   private user: CreateUserDto = {
  //     name: "",
  //     password: "",
  //     email: "",
  // };

  


  // userService.valid = true
  // set valid(flag: boolean) {
  //    // this.user.isValid = flag;
  // }
  // userService.valid
  // get valid(): boolean {
  //     //return this.user.isValid;
  // }

  // userService.name = "arun"
//   set name(n: string) {
//       this.user.name = n;
//   }
//   // userService.name
  
//   get name(): string {
//       return this.user.name;
//   }

//   set email(n: string) {
//     this.user.email = n;
// }
// // userService.name
// get email(): string {
//     return this.user.email;
// }

// set password(n: string) {
//   this.user.name = n;
// }
// // userService.name
// get password(): string {
//   return this.user.password;
// }

// findAll(){
//   //this.users.push({})
//   return this.user
// }

    // create(createUserDto: CreateUserDto):User {
    //     this.users.push({
    //       ...createUserDto,
    //       id: this.idSeq++
         
    //     });
    //     return this.users.at(-1);
    //   }
    
       // return `This action adds a new user with ${JSON.stringify(createUserDto)} fields`;
    
    
   
   

}
