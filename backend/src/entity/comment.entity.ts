import { Entity,Column,PrimaryGeneratedColumn,ManyToOne } from "typeorm";
import { Post } from "./post.entity";
import { User } from "./user.entity";

@Entity()
export class Comment{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    username:string;
    
    @Column()
    content:string;

    @ManyToOne(()=>Post,(post)=>post.comments)
    post:Post;

    @ManyToOne(()=>User,(user)=>user.comments)
    user:User;
}
