import { UserFilterDto } from '@app/models/lib/user-filter.dto'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BaseService } from '../base.service'
import { UserFilter } from './user-filter.entity'

@Injectable()
export class UserFiltersService extends BaseService<UserFilter, UserFilterDto> {
  constructor(
    @InjectRepository(UserFilter)
    repo: Repository<UserFilter>,
  ) { super(repo) }
}
