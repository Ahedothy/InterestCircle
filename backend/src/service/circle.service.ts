/*import { Provide } from "@midwayjs/core";

@Provide()
export class CircleService{
    private circles = new Map<string,{id:string;name:string;intro:string}>();

    async createCircle(circleData:{name:string;intro:string}){
        const id = (Math.random()*100000).toFixed(0);
        const circle = {id,...circleData};
        this.circles.set(id,circle);
        return circle;
    }

    async getCircle(id:string){
        return this.circles.get(id);
    }
}*/