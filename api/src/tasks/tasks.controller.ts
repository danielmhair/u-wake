import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common'
import { DeepPartial } from 'typeorm'
import { BaseController } from '../base.controller'
import { TaskDto } from '@app/models'
import { Task } from './task.entity'
import { TasksService } from './tasks.service'

@Controller('projects')
export class TasksController extends BaseController<TasksService, Task, TaskDto> {
  constructor(projectsService: TasksService) {
    super(projectsService)
  }

  @Post()
  async create(@Body() createTaskDto: TaskDto | TaskDto[]): Promise<DeepPartial<Task> | DeepPartial<Task>[]> {
    return super.create(createTaskDto)
  }

  @Get()
  async getAll(): Promise<Task[]> {
    return super.getAll()
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return super.getById(id)
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return super.deleteById(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: Task): Promise<Task> {
    return super.update(id, body)
  }
}
