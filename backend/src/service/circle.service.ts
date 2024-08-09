import { Provide } from "@midwayjs/core";
import { InjectEntityModel } from "@midwayjs/typeorm";
import { InterestCircle } from '../entity/circle.entity';
import { Repository } from "typeorm";
import { User} from "../entity/user.entity";
import { Post } from "../entity/post.entity";

@Provide()
export class CircleService{
    @InjectEntityModel(InterestCircle)
    circleModel:Repository<InterestCircle>;

    @InjectEntityModel(User)
    userModel:Repository<User>;

    @InjectEntityModel(Post)
    postModel:Repository<Post>;

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

    async joinCircle(username:string,id:number){
        console.log(username,id);
        const user = await this.userModel.findOne({where:{username:username},relations:['circles']});
        const circle = await this.circleModel.findOne({where:{id:id}});
        user.circles.push(circle);
        await this.userModel.save(user);
        console.log(user.username,'joined circle:',circle.id,circle.name,id);
        return {success:true,message:'join circle successfully'};
    }

    async createPost(id:number,username:string,title:string,content:string){
        const user = await this.userModel.findOne({where:{username:username},relations:['circles']});
        const circle = await this.circleModel.findOne({where:{id:id}});
        const post = this.postModel.create({title,content,user,circle});
        await this.postModel.save(post);
        console.log(username,'posted',title,'in circle',circle.name);
        return{success:true,message:'post successfully'};
    }

    async getPosts(id:number){
        const circle = await this.circleModel.findOneBy({id});
        return await this.postModel.find({where:{circle}});
    }

    async getIfJoined(id:number,username:string){
        console.log(id,username);
        const user = await this.userModel.findOne({where:{username:username},relations:['circles']});
        if(!user){
            return false;
        }
        const isjoined = user.circles.some(circle => circle.id === id);
        console.log(isjoined,user);
        return isjoined;
    }
}