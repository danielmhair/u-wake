import { OwnerTaskDto } from '@app/models'
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common'
import { DeepPartial } from 'typeorm'
import { BaseController } from '../base.controller'
import { OwnerTask } from './owner-task.entity'
import { OwnersTasksService } from './owners-tasks.service'

@Controller('owners-tasks')
export class OwnersTasksController extends BaseController<OwnersTasksService, OwnerTask, OwnerTaskDto> {
  constructor(usersService: OwnersTasksService) {
    super(usersService)
  }

  @Post()
  async create(@Body() userProject: OwnerTaskDto | OwnerTaskDto[]): Promise<DeepPartial<OwnerTask> | DeepPartial<OwnerTask>[]> {
    return super.create(userProject)
  }

  @Get()
  async getAll(): Promise<OwnerTask[]> {
    return super.getAll()
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<OwnerTask> {
    return super.getById(id)
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return super.deleteById(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: OwnerTask): Promise<OwnerTask> {
    return super.update(id, body)
  }
}
