import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
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

  @OneToOne(() => Task, task => task.id, {
    nullable: true,
    cascade: true,
  })
  @JoinColumn({ name: 'parent_id' })
  parent: Task

  @Column({ nullable: true })
  parent_id: number

  @ManyToOne(() => Priority, priority => priority.id, { nullable: true, cascade: true })
  @JoinColumn({ name: 'priority_id' })
  priority: Priority

  @Column({ nullable: true })
  priority_id: number

  @OneToMany(() => Project, project => project.id,  { cascade: true })
  @JoinColumn({ name: 'project_id' })
  project: Project

  @Column()
  project_id: number
}
