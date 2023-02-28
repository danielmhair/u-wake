import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseService } from '../base.service'
import { Repository } from 'typeorm'
import { CommentDto } from '@app/models'
import { Comment } from './comment.entity'

@Injectable()
export class CommentsService extends BaseService<Comment, CommentDto> {
  constructor(
    @InjectRepository(Comment)
    repo: Repository<Comment>,
  ) { super(repo)}
}
