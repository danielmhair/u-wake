import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'labels' })
export class Label {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
}
