import { Controller, Post, Provide,Body ,Inject} from '@midwayjs/core';
import { Context } from 'koa';
import { UserService } from '../service/user.service';

@Provide()
@Controller('/api/user')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('/register')
  async register(@Body() user:{username:string,password:string}) {
    const result = await this.userService.register(user.username,user.password);
    this.ctx.body = result;
  }

  @Post('/login')
  async login(@Body() user:{username:string,password:string}) {
    const result = await this.userService.login(user.username,user.password);
    this.ctx.body = result;
  }

}
