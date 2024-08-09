import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { InterestCircle } from './circle.entity';
import { Post } from './post.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique:true})
  username: string;

  @Column()
  password: string;

  @ManyToMany(()=>InterestCircle,circle =>circle.users)
  @JoinTable()
  circles:InterestCircle[];

  @OneToMany(()=>Post,post=>post.user)
  posts:Post[];
}
