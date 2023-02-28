import { Task } from '../tasks/task.entity'
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm'
import { Label } from '../labels/label.entity'
import { User } from '../users/user.entity'

@Entity({ name: 'labels_tasks' })
export class LabelTask {
  @OneToMany(() => Task, task => task.id)
  @JoinColumn({ name: 'task_id' })
  task: Task

  @PrimaryColumn()
  task_id: number

  @OneToMany(() => Label, label => label.id)
  @JoinColumn({ name: 'label_id' })
  label: Label

  @PrimaryColumn()
  label_id: number
}
