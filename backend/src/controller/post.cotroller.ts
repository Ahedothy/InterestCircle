import {Provide, Controller,Get,Param,Inject } from "@midwayjs/core";
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

}