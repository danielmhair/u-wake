import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseService } from '../base.service'
import { Repository } from 'typeorm'
import { ProjectDto } from '@app/models'
import { Project } from './project.entity'

@Injectable()
export class ProjectsService extends BaseService<Project, ProjectDto> {
  constructor(
    @InjectRepository(Project)
    repo: Repository<Project>,
  ) { super(repo)}
}
