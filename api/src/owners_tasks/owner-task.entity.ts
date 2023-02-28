import { Task } from '../tasks/task.entity'
import { Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm'
import { User } from '../users/user.entity'

@Entity({ name: 'owners_tasks' })
export class OwnerTask {
  @OneToMany(() => Task, task => task.id)
  @JoinColumn({ name: 'task_id' })
  task: Task

  @PrimaryColumn()
  task_id: number

  @OneToMany(() => User, owner => owner.id)
  @JoinColumn({ name: 'owner_id' })
  owner: User

  @PrimaryColumn()
  owner_id: number
}
