import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseService } from '../base.service'
import { Repository } from 'typeorm'
import { OwnerTaskDto } from '@app/models'
import { OwnerTask } from './owner-task.entity'

@Injectable()
export class OwnersTasksService extends BaseService<OwnerTask, OwnerTaskDto> {
  constructor(
    @InjectRepository(OwnerTask)
    repo: Repository<OwnerTask>,
  ) { super(repo) }
}
