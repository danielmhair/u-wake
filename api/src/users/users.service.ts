import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseService } from '../base.service'
import { Repository } from 'typeorm'
import { UserDto } from '@app/models'
import { User } from './user.entity'

@Injectable()
export class UsersService extends BaseService<User, UserDto> {
  constructor(
    @InjectRepository(User)
    repo: Repository<User>,
  ) { super(repo)}
}
