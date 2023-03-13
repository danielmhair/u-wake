import { User } from '../users/user.entity'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'priorities' })
export class Priority {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => User, user => user.id, { cascade: true })
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column()
  user_id: number

  @Column()
  name: string
}
