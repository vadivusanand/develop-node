import { Body, Controller, Get, Param, Post, Query, Req ,UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import {regUserDTO} from './dto/regUser.dto';
import {paybillsDTO} from './dto/paybills.dto'
import { loginDTO } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { changepassDTO } from './dto/changepass.dto';
import { forgotpassWordDTO } from './dto/forgotpassWord.dto';
import { balanceDTO } from './dto/balance.dto';
import { creditamountDto } from './dto/creditamount.dto';

@Controller('api/user')
export class UsersController {
    constructor(public _UsersService:UsersService){}

    /* register user */
@Post('/register')
register(@Body() reguser:regUserDTO){
  const regUserData= this._UsersService.registerUser(reguser);
  console.log('save',regUserData)
  return regUserData;
}

@Post('/login')
@UseGuards(AuthGuard('local'))
loginUser(@Body()loguser:loginDTO){
  const login=this._UsersService.usercheck(loguser.username);
  return login;
}

@Post('/changepassword')
@UseGuards(AuthGuard('jwt'))
changePassword(@Body() changepwd:changepassDTO){
const updatedpassword= this._UsersService.changepassword(changepwd.email,changepwd.oldpassword,changepwd.newpassword);
return updatedpassword;
}

@Post('/forgotpassword')
//@UseGuards(AuthGuard('jwt'))
forgotpassWord(@Body() resetPassWord:forgotpassWordDTO){
const passWordReset= this._UsersService.forgotpassword(resetPassWord.email,resetPassWord.username,resetPassWord.resetpassword);
return passWordReset;
}

@Get('/balance')
// @UseGuards(AuthGuard('jwt'))
checkbalance(@Body() balance:balanceDTO){
  return this._UsersService.checkbalance(balance.email)
}

@Get('credit/:amount')
//@UseGuards(AuthGuard('jwt'))
creditamount(@Body() creditdto:creditamountDto, @Param('amount') amount){
  return this._UsersService.balanceCredit(creditdto.email,parseInt(amount))
}

@UseGuards(AuthGuard('jwt'))
@Get('/bills/:electricitybill?/:mobilebill?')
payelectricitybill(@Body() paybillsDTO:paybillsDTO, @Query('electricitybill')electricitybill=0, @Query('mobilebill')mobilebill=0){ 
  const paidBill=this._UsersService.payelectricity(paybillsDTO.email,electricitybill,mobilebill);
  return paidBill;
}

}
