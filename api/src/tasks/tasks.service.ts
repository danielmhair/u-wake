import { TaskDto } from '@app/models'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BaseService } from '../base.service'
import { Task } from './task.entity'

@Injectable()
export class TasksService extends BaseService<Task, TaskDto> {
  constructor(
    @InjectRepository(Task)
    repo: Repository<Task>,
  ) { super(repo)}
}
