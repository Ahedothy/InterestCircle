import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Post } from '../entity/post.entity';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { Comment } from '../entity/comment.entity';

@Provide()
export class PostService{
    @InjectEntityModel(Post)
    postModel:Repository<Post>;

    @InjectEntityModel(User)
    userModel:Repository<User>;

    @InjectEntityModel(Comment)
    commentModel:Repository<Comment>;

    async getPost(postid:number){
        console.log('get post by postid:',postid);
        return await this.postModel.findOne({where:{id:postid},relations:['user']});
    }

    async createComment(postid:number,username:string,content:string){
        const user = await this.userModel.findOne({where:{username:username}});
        const post = await this.postModel.findOne({where:{id:postid}});
        const comment = this.commentModel.create({username,content,post,user});
        await this.commentModel.save(comment);
        console.log(username,'comment',content,'in post',post.title);
        return{success:true,message:'comment successfully'};
    }

    async getComments(postid:number){
        const post = await this.postModel.findOne({where:{id:postid}});
        return await this.commentModel.find({where:{post}});
    }
}