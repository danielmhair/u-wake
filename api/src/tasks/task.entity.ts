import { Priority } from 'src/priorities/priority.entity'
import { Project } from 'src/projects/project.entity'
import { User } from 'src/users/user.entity'
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

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
  task: Task

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
