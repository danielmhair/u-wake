import { Task } from '../tasks/task.entity'
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'comments' })
export class Comment {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  message: string

  @CreateDateColumn()
  created: Date

  @ManyToOne(() => Task, task => task.id, { cascade: true })
  @JoinColumn({ name: 'task_id' })
  task: Task

  @Column()
  task_id: number
}
