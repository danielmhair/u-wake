import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseService } from '../base.service'
import { Repository } from 'typeorm'
import { TaskActivityItemDto } from '@app/models'
import { TaskActivityItem } from './task-activity.entity'

@Injectable()
export class TasksActivityService extends BaseService<TaskActivityItem, TaskActivityItemDto> {
  constructor(
    @InjectRepository(TaskActivityItem)
    repo: Repository<TaskActivityItem>,
  ) { super(repo) }
}
