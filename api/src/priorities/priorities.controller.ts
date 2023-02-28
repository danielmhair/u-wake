import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common'
import { DeepPartial } from 'typeorm'
import { BaseController } from '../base.controller'
import { PriorityDto } from '@app/models'
import { Priority } from './priority.entity'
import { PrioritiesService } from './priorities.service'

@Controller('priorities')
export class PrioritiesController extends BaseController<PrioritiesService, Priority, PriorityDto> {
  constructor(projectsService: PrioritiesService) {
    super(projectsService)
  }

  @Post()
  async create(@Body() createPriorityDto: PriorityDto | PriorityDto[]): Promise<DeepPartial<Priority> | DeepPartial<Priority>[]> {
    return super.create(createPriorityDto)
  }

  @Get()
  async getAll(): Promise<Priority[]> {
    return super.getAll()
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<Priority> {
    return super.getById(id)
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return super.deleteById(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: Priority): Promise<Priority> {
    return super.update(id, body)
  }
}
