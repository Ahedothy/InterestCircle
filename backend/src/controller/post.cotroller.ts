import {Provide, Controller,Get,Param,Inject, Body ,Post} from "@midwayjs/core";
import { PostService } from "../service/post.service";

@Provide()
@Controller('api/post')
export class PostController{

    @Inject()
    postService:PostService;

    @Get('/:postid')
    async getPost(@Param('postid') postid:number){
        return await this.postService.getPost(postid);
    }

    @Post('/:postid/comment')
    async createComment(@Param('postid') postid:number,@Body() body:{username:string;content:string}){
        return await this.postService.createComment(postid,body.username,body.content);
    }

    @Get('/:postid/comments')
    async getComments(@Param('postid') postid:number){
        return await this.postService.getComments(postid);
    }
}