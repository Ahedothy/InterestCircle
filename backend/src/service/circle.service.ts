import { Provide } from "@midwayjs/core";
import { InjectEntityModel } from "@midwayjs/typeorm";
import { InterestCircle } from '../entity/circle.entity';
import { Repository } from "typeorm";

@Provide()
export class CircleService{
    @InjectEntityModel(InterestCircle)
    circleModel:Repository<InterestCircle>;

    async createCircle(name:string,intro:string){
        console.log('Create circle:',name,intro);
        const circle = this.circleModel.create({name,intro});
        return await this.circleModel.save(circle);
    }

    async getCircles(){
        return await this.circleModel.find();
    }

    async getCircle(id:number){
        return await this.circleModel.findOneBy({id});
    }
}