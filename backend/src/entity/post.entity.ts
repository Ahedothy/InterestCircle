import { Entity,Column,PrimaryGeneratedColumn,ManyToOne,OneToMany } from "typeorm";
import { User } from "./user.entity";
import { InterestCircle } from "./circle.entity";
import { Comment } from "./comment.entity";

@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    content:string;

    @Column({nullable:true})
    imageUrl:string;

    @ManyToOne(()=>User,user=>user.posts)
    user:User;

    @ManyToOne(()=>InterestCircle,circle=>circle.posts)
    circle:InterestCircle;

    @OneToMany(()=>Comment,(comment)=>comment.post)
    comments:Comment[];
}