import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common'
import { DeepPartial } from 'typeorm'
import { BaseController } from '../base.controller'
import { CommentDto } from '@app/models'
import { Comment } from './comment.entity'
import { CommentsService } from './comments.service'

@Controller('comments')
export class CommentsController extends BaseController<CommentsService, Comment, CommentDto> {
  constructor(commentsService: CommentsService) {
    super(commentsService)
  }

  @Post()
  async create(@Body() createCommentDto: CommentDto | CommentDto[]): Promise<DeepPartial<Comment> | DeepPartial<Comment>[]> {
    return super.create(createCommentDto)
  }

  @Get()
  async getAll(): Promise<Comment[]> {
    return super.getAll()
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<Comment> {
    return super.getById(id)
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return super.deleteById(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: Comment): Promise<Comment> {
    return super.update(id, body)
  }
}
