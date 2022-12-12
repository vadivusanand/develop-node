import { IsNotEmpty, IsEmail, IsString, Matches } from "class-validator";

//import { userValidation } from '../login/validation.pipe'
export class CreateRegUserDto {
 //@Matches('^[a-zA-Z\\s]+$', undefined, { each: true })
   @Matches('^[a-zA-Z]+$', undefined, { each: true })
   @IsNotEmpty()
   @IsString()
   username:    string;
   @IsNotEmpty()
   @IsString()
   password: string;
   @IsNotEmpty()
   @IsEmail()
   email:  string;
   
}



