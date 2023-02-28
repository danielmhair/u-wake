import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseService } from '../base.service'
import { Repository } from 'typeorm'
import { LabelTaskDto } from '@app/models'
import { LabelTask } from './label-task.entity'

@Injectable()
export class LabelsTasksService extends BaseService<LabelTask, LabelTaskDto> {
  constructor(
    @InjectRepository(LabelTask)
    repo: Repository<LabelTask>,
  ) { super(repo) }
}
