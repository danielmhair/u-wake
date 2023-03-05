import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseService } from '../base.service'
import { Repository } from 'typeorm'
import { ActivityDto } from '@app/models'
import { Activity } from './activity.entity'

@Injectable()
export class ActivitiesService extends BaseService<Activity, ActivityDto> {
  constructor(
    @InjectRepository(Activity)
    repo: Repository<Activity>,
  ) { super(repo) }
}
