import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InterestCircle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  intro: string;
}
