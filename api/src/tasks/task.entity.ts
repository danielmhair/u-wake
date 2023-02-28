import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Priority } from '../priorities/priority.entity'
import { Project } from '../projects/project.entity'

@Entity({ name: 'tasks' })
export class Task {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @Column({ default: 0 })
  order: number

  @Column({ type: 'date' })
  due_date: Date;

  @OneToOne(() => Task, task => task.id)
  @JoinColumn({ name: 'parent_id' })
  parent: Task

  @Column()
  parent_id: number

  @OneToOne(() => Priority, priority => priority.id)
  @JoinColumn({ name: 'priority_id'})
  priority: Priority

  @Column()
  priority_id: number

  @OneToMany(() => Project, project => project.id)
  @JoinColumn({ name: 'project_id' })
  project: Project

  @Column()
  project_id: number
}
