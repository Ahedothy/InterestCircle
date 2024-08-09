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
}