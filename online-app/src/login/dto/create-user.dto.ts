import { IsNotEmpty, IsEmail, IsString, Matches } from "class-validator";

//import { userValidation } from '../login/validation.pipe'
export class CreateUserDto {
 //@Matches('^[a-zA-Z\\s]+$', undefined, { each: true })
  @Matches('^[a-zA-Z]+$', undefined, { each: true })
   @IsNotEmpty()
   @IsString()
   ///^[A-Z]+$/i
    username:    string;
    @IsNotEmpty()
    @IsString()
    password: string;
 // public  email:    string;
   
}



