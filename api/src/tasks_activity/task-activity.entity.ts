import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm'
import { Task } from '../tasks/task.entity'
import { User } from '../users/user.entity'

@Entity({ name: 'tasks_activity' })
export class TaskActivityItem {
  @OneToMany(() => Task, task => task.id)
  @JoinColumn({ name: 'task_id' })
  task: Task

  @PrimaryColumn()
  task_id: number

  @OneToMany(() => User, owner => owner.id)
  @JoinColumn({ name: 'owner_id' })
  user: User

  @PrimaryColumn()
  user_id: number

  @Column({ type: 'date' })
  public date: Date = null

  @Column()
  public action = ''
}
