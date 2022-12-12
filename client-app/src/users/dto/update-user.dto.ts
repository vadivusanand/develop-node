import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}

// used to create same type for update and createDTO 

/*

The PartialType() function returns a type (class) with all the properties of the input type set to optional. For example, suppose we have a create type a
y default, all of these fields are required. To create a type with the same fields, but with each one optional,
 use PartialType() passing the class reference (CreateCatDto) as an argument:
*/