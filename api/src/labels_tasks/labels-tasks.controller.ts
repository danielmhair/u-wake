import { LabelTaskDto } from '@app/models'
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common'
import { DeepPartial } from 'typeorm'
import { BaseController } from '../base.controller'
import { LabelTask } from './label-task.entity'
import { LabelsTasksService } from './labels-tasks.service'

@Controller('labels-tasks')
export class LabelsTasksController extends BaseController<LabelsTasksService, LabelTask, LabelTaskDto> {
  constructor(labelsTasksService: LabelsTasksService) {
    super(labelsTasksService)
  }

  @Post()
  async create(@Body() userProject: LabelTaskDto | LabelTaskDto[]): Promise<DeepPartial<LabelTask> | DeepPartial<LabelTask>[]> {
    return super.create(userProject)
  }

  @Get()
  async getAll(): Promise<LabelTask[]> {
    return super.getAll()
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<LabelTask> {
    return super.getById(id)
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return super.deleteById(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: LabelTask): Promise<LabelTask> {
    return super.update(id, body)
  }
}
