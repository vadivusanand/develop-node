import { HttpException, HttpStatus, Injectable, Module } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { loginDTO } from './dto/login.dto';
import { regUserDTO } from './dto/regUser.dto';
import { User } from './users.entity';


@Injectable()
export class UsersService {
constructor(@InjectRepository(User) 
private usersRepository: Repository<User>){}

async registerUser(regUser:regUserDTO):Promise<regUserDTO>{
    const reguser= await this.usersRepository.save(regUser);
    console.log('regUser',reguser);
    return reguser;
}  
async usercheck(username:string):Promise<loginDTO>{
return await this.usersRepository.findOne({ where: { username } });
}

async changepassword(email:string,password:string, newpassword:string){
const founduser= await this.usersRepository.find({ where: { email ,password} });
if(founduser){
    return await this.usersRepository.update(email, {password:newpassword}); 
}
else{ 
    throw new HttpException("Email or password incorrect",HttpStatus.UNAUTHORIZED)
}}

async forgotpassword(email:string,username:string, resetpassword:string){
    const user= await this.usersRepository.find({ where: { email ,username} });
    if(user.length>0){
        return await this.usersRepository.update(email, {password:resetpassword}); 
    }
    else{ 
        throw new HttpException("credentials is incorrect",HttpStatus.UNAUTHORIZED);
    }}

async checkbalance(email:string){
    const foundemail= await this.usersRepository.findOne({ where: { email } });
    const balance={
        accountbalance:foundemail.accountbalance 
    }
    return balance;
}

async balanceCredit(email:string,amount:number){
    const foundemail=await this.usersRepository.findOne({ where:{email}});
    const creditbal=foundemail.accountbalance+amount;
    return await this.usersRepository.update(email, {accountbalance:creditbal});
   
}
async payelectricity(email:string,ebill:number,pbill:number){
    const foundemail=await this.usersRepository.findOne({ where:{email}});
   // if(foundemail.email.length>0 && foundemail.accountbalance>0){
    if(foundemail){
    //     const bill=(+ebill)+(+pbill);
    // let paybill=Math.abs(foundemail.accountbalance)-Math.abs(bill);
    return "bill paid"
    }
    else
    throw new HttpException("less balance, please check", HttpStatus.EXPECTATION_FAILED)    
}

async payphone(email:string,bill:number){
    const foundemail=await this.usersRepository.findOne({ where:{email}});
  //  if(foundemail.email.length>0 && foundemail.accountbalance>0){
    if(foundemail){
        const paybill=foundemail.accountbalance-bill;
       return await this.usersRepository.update(email, {accountbalance:paybill});
    }
    else
    throw new HttpException("negative balance please credit amount", HttpStatus.EXPECTATION_FAILED)    

}
async payphoneandelectricity(email:string,pbill:number,ebill:number){
    const foundemail=await this.usersRepository.findOne({ where:{email}});
    if(foundemail.email.length>0 && foundemail.accountbalance>0){
        const paybill=foundemail.accountbalance-(pbill+ebill);
        return await this.usersRepository.update(email, {accountbalance:paybill});
    }
    else
    throw new HttpException("negative balance please credit amount", HttpStatus.EXPECTATION_FAILED)    
}
}
  