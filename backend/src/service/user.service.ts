import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel:Repository<User>;

  async register(username:string,password:string) {

    const existuser = await this.userModel.findOne({where:{username}});
    if(existuser){
      console.log('already has user:',username,existuser);
      return{success:false,message:'Username has already been used'};
    }
    console.log('register:',username,password);
    const user = this.userModel.create({username,password});
    await this.userModel.save(user);
    return{success:true,message:'Registered successfully'};
  }

  async login(username:string,password:string) {
    const user = await this.userModel.findOne({where:{username}});
    console.log('try to login:',username,password,user);
    if(!user||user.password!==password){
      console.log('login failed.compare:',user,password);
      return{success:false,message:'username or password wrong'};
    }
    return{success:true,message:'Loggedin successfully'};
  }
}