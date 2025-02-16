import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // -> 這是一個資料表(Table)
export class User {
  @PrimaryGeneratedColumn() // -> 這是一個自動增長的 ID
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;
}
