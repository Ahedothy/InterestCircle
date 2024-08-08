import { Provide } from '@midwayjs/core';

@Provide()
export class UserService {

  private users = new Map<string,string>();

  async login(username:string,password:string) {
    if(this.users.has(username)){
      return{success:false,message:'Username has been used'};
    }else{
      this.users.set(username,password);
      console.log('login:',username,password);
      return { success: true, message: 'User logined successfully' };
    }
  }

  /*async login(username:string,password:string) {
    if (this.users.get(username)===password) {
      console.log('login:',username);
      return { success: true, message: 'Login successful' };
    } else {
      console.log('login failed',username,password,this.users.get(username));
      return { success: false, message: 'Invalid username or password' };
    }
  }*/
}