import { Task } from '../tasks/task.entity'
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'reminders' })
export class Reminder {
  @PrimaryGeneratedColumn()
  id: number

  @OneToMany(() => Task, task => task.id, { cascade: true })
  @JoinColumn({ name: 'task_id' })
  task: Task

  @Column()
  task_id: number

  @Column({ type: 'date' })
  remind_at: Date
}
