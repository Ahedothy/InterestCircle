import { Entity,Column,PrimaryGeneratedColumn,ManyToOne } from "typeorm";
import { User } from "./user.entity";
import { InterestCircle } from "./circle.entity";

@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    content:string;

    @ManyToOne(()=>User,user=>user.posts)
    user:User;

    @ManyToOne(()=>InterestCircle,circle=>circle.posts)
    circle:InterestCircle;
}