import {Provide, Controller,Post,Get,Body,Param,Inject, Query,File, Fields } from "@midwayjs/core";
import{CircleService} from '../service/circle.service';
import { join } from "path";
import { promises } from 'fs';

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
    async createPost(
        @Param('id') id:number,
        @Fields() body: any,
        @File('image') image:any){
        console.log(body);
        console.log(image);
        var imageUrl=null;
        if(image){
        const targetDir=join(__dirname,'..','..','..','frontend','dist','uploads');
        const targetPath=join(targetDir,image.filename);
        await promises.rename(image.data,targetPath);
        imageUrl = `/uploads/${image.filename}`;
        console.log(imageUrl);
        }
        return await this.circleService.createPost(id,body.username,body.title,body.content,imageUrl);
    }

    @Get('/:id/posts')
    async getPosts(@Param('id') id:number){
        return await this.circleService.getPosts(id);
    }

    @Get('/:id/isjoined')
    async getIfJoined(@Param('id') id:number,@Query('username') username:string){
        return await this.circleService.getIfJoined(id,username);
    }

    @Get('/:id/activity')
    async getActivity(@Param('id') id:number){
        return await this.circleService.getActivity(id);
    }
}

