import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm'
import { Task } from '../tasks/task.entity'
import { User } from '../users/user.entity'

@Entity({ name: 'activities' })
export class Activity {
  @PrimaryColumn()
  action_id: number

  @OneToMany(() => User, owner => owner.id, { cascade: true })
  @JoinColumn({ name: 'owner_id' })
  user: User

  @PrimaryColumn()
  user_id: number

  @Column({ type: 'date' })
  public date: Date = null

  @Column({ type: 'varchar' })
  public action = ''
}
