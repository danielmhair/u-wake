import { User } from '../users/user.entity'
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm'

@Entity({ name: 'users_settings' })
export class UserSettings {
  @OneToMany(() => User, user => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User

  @PrimaryColumn()
  user_id: number

  @Column({ default: false })
  reset_subtasks: boolean
}
