import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Post } from '../entity/post.entity';
import { Repository } from 'typeorm';

@Provide()
export class PostService{
    @InjectEntityModel(Post)
    postModel:Repository<Post>;

    async getPost(postid:number){
        console.log('get post by postid:',postid);
        return await this.postModel.findOne({where:{id:postid},relations:['user']});
    }
}