import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Post } from './post.entity';

@Entity()
export class InterestCircle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  intro: string;

  @ManyToMany(()=>User,user=>user.circles)
  users:User[];

  @OneToMany(()=>Post,post=>post.circle)
  posts:Post[];
}
