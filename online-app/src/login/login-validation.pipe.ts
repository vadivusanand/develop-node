import { ArgumentMetadata, Injectable, NotAcceptableException, PipeTransform } from '@nestjs/common'
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class LoginValidationPipe implements PipeTransform{
  async  transform(value: any, metadata: ArgumentMetadata) {
        console.log('Reading data from validation pipe')
        //console.log(value);
        const loginObj = plainToInstance(CreateUserDto, value)
      //  console.log(loginObj)
        let errors = await validate(loginObj);
        if(errors.length > 0){
            errors.forEach(err => {
              //  console.log(err.constraints)
                return err.constraints
            })
            
         //   console.log(JSON.stringify(errors))
            //All the built-in exceptions can also provide both an error cause and an error description using the options parameter:
          throw new NotAcceptableException(errors)
          
           // throw new NotAcceptableException('Something bad happened',{ cause: new Error(), description: 'user name or password field please check' })
        }
        else {
            return value
        }
    }
}