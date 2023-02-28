import { UserSettingsDto } from '@app/models/lib/user-settings.dto'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BaseService } from '../base.service'
import { UserSettings } from './user_settings.entity'

@Injectable()
export class UsersSettingsService extends BaseService<UserSettings, UserSettingsDto> {
  constructor(
    @InjectRepository(UserSettings)
    repo: Repository<UserSettings>,
  ) { super(repo) }
}
