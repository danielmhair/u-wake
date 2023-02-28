import { TaskActivityItemDto } from '@app/models'
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common'
import { DeepPartial } from 'typeorm'
import { BaseController } from '../base.controller'
import { TaskActivityItem } from './task-activity.entity'
import { TasksActivityService } from './tasks-activity.service'

@Controller('tasks-activity')
export class TasksActivityController extends BaseController<TasksActivityService, TaskActivityItem, TaskActivityItemDto> {
  constructor(usersService: TasksActivityService) {
    super(usersService)
  }

  @Post()
  async create(@Body() taskActivityItem: TaskActivityItemDto | TaskActivityItemDto[]): Promise<DeepPartial<TaskActivityItem> | DeepPartial<TaskActivityItem>[]> {
    return super.create(taskActivityItem)
  }

  @Get()
  async getAll(): Promise<TaskActivityItem[]> {
    return super.getAll()
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<TaskActivityItem> {
    return super.getById(id)
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return super.deleteById(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: TaskActivityItem): Promise<TaskActivityItem> {
    return super.update(id, body)
  }
}
