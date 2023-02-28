import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseService } from '../base.service'
import { Repository } from 'typeorm'
import { UserProjectDto } from '@app/models'
import { UserProject } from './users-projects.entity'

@Injectable()
export class UsersProjectsService extends BaseService<UserProject, UserProjectDto> {
  constructor(
    @InjectRepository(UserProject)
    repo: Repository<UserProject>,
  ) { super(repo) }
}
