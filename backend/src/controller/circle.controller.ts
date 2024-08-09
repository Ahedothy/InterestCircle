import {Provide, Controller,Post,Get,Body,Param,Inject } from "@midwayjs/core";
import{CircleService} from '../service/circle.service';

@Provide()
@Controller('/api/circle')
export class CircleController{

    @Inject()
    circleService:CircleService;

    @Post('/create')
    async createCircle(@Body() circle:{name:string;intro:string}){
        return await this.circleService.createCircle(circle.name, circle.intro);
    }

    @Get('/circles')
    async getCircles(){
        return await this.circleService.getCircles();
    }

    @Get('/:id')
    async getCircle(@Param('id') id:number){
        return await this.circleService.getCircle(id);
    }

    @Post('/join')
    async joinCircle(@Body() body:{username:string;id:number}){
        return await this.circleService.joinCircle(body.username,body.id);
    }

    @Post('/:id/post')
    async createPost(@Param('id') id:number,@Body() body:{username:string;title:string;content:string}){
        return await this.circleService.createPost(id,body.username,body.title,body.content);
    }

    @Get('/:id/posts')
    async getPosts(@Param('id') id:number){
        return await this.circleService.getPosts(id);
    }
}