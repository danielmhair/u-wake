import { User } from 'src/users/user.entity'
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'labels' })
export class Label {
  @OneToOne(() => User, user => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User

  @PrimaryColumn()
  user_id: number

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
}
