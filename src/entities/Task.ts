// src/entities/Task.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    ManyToMany,
    JoinTable,
  } from "typeorm";
  import { Project } from "./Project";
  import { User } from "./User";
  import { Tag } from "./Tag";
  import { TaskStatus } from "./TaskStatus";
  
  @Entity("tasks")
  export class Task {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column({ type: "varchar" })
    title!: string;
  
    @Column({ type: "text", nullable: true })
    description!: string | null;
  
    @Column({ type: "enum", enum: TaskStatus, default: TaskStatus.TODO })
    status!: TaskStatus;
  
    @Column({ type: "int", nullable: true })
    priority!: number | null;
  
    @ManyToOne(() => Project, (project) => project.tasks, { onDelete: "CASCADE" })
    project!: Project;
  
    @ManyToOne(() => User, (user) => user.assignedTasks, {
      nullable: true,
      onDelete: "SET NULL",
    })
    assignee!: User | null;
  
    @Column({ type: "date", nullable: true })
    due_date!: Date | null;
  
    @Column({ type: "timestamp", default: () => "now()" })
    created_at!: Date;
  
    @ManyToMany(() => Tag)
    @JoinTable({ name: "task_tags" })
    tags!: Tag[];
  }