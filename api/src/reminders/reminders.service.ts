import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseService } from '../base.service'
import { Repository } from 'typeorm'
import { ReminderDto } from '@app/models'
import { Reminder } from './reminder.entity'

@Injectable()
export class RemindersService extends BaseService<Reminder, ReminderDto> {
  constructor(
    @InjectRepository(Reminder)
    repo: Repository<Reminder>,
  ) { super(repo)}
}
