import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseService } from '../base.service'
import { Repository } from 'typeorm'
import { PriorityDto } from '@app/models'
import { Priority } from './priority.entity'

@Injectable()
export class PrioritiesService extends BaseService<Priority, PriorityDto> {
  constructor(
    @InjectRepository(Priority)
    repo: Repository<Priority>,
  ) { super(repo)}
}
