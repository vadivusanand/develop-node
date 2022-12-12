import { Injectable } from '@nestjs/common';
import { CreateRegUserDto } from './dto/create-reg-user.dto';
import { User } from './registration.model';

@Injectable()
export class RegisterService {
    private reguser:User[] = [];
 

    createRegUser(createRegUserDto: CreateRegUserDto): User {
        const { username, password, email } = createRegUserDto;
        const userreg: User = {
         // id: uuid(),
          username,
          password,
          email,

        };
        this.reguser.push(userreg);
        return userreg;
      }
  
      getAllUsers(){
        console.log(...this.reguser)
        return [...this.reguser]
      }
  
}
