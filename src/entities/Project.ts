// src/entities/Project.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "./User";
import { Task } from "./Task";

@Entity("projects")
export class Project {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar" })
  name!: string;

  @ManyToOne(() => User, (user) => user.projects, { onDelete: "CASCADE" })
  owner!: User;

  @Column({ type: "timestamp", default: () => "now()" })
  created_at!: Date;

  @OneToMany(() => Task, (task) => task.project)
  tasks!: Task[];
}