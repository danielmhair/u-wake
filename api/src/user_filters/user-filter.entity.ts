import { User } from '../users/user.entity'
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm'

@Entity({ name: 'user_filters' })
export class UserFilter {
  @OneToMany(() => User, user => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User

  @PrimaryColumn()
  user_id: number

  @Column()
  name: string

  @Column()
  color: string

  @Column()
  filter_query: string
}
