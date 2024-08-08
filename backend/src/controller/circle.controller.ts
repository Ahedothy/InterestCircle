/*import { Controller,Post,Get,Provide,Inject,Body,Param } from "@midwayjs/core";
import { Context } from "@midwayjs/koa";
import{CircleService} from '../service/circle.service';
@Provide()
@Controller('/api/circle')
export class CircleController{
    @Inject()
    ctx:Context;

    @Inject()
    circleService:CircleService;

    @Post('/')
    async createCircle(@Body() circleData:{name:string;intro:string}){
        const result = await this.circleService.createCircle(circleData);
        this.ctx.body ={success:true,data:result};
    }

    @Get('/:id')
    async getCircle(@Param('id') id:string){
        const result = await this.circleService.getCircle(id);
        this.ctx.body ={success:true,data:result};
    }
}*/