import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm'
import { Project } from '../projects/project.entity'
import { User } from '../users/user.entity'

@Entity({ name: 'users_projects' })
export class UserProject {
  @OneToMany(() => User, user => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User

  @PrimaryColumn()
  user_id: number

  @OneToMany(() => Project, project => project.id)
  @JoinColumn({ name: 'project_id' })
  project: Project

  @PrimaryColumn()
  project_id: number;
}
