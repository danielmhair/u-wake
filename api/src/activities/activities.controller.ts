import { ActivityDto } from '@app/models'
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common'
import { DeepPartial } from 'typeorm'
import { BaseController } from '../base.controller'
import { Activity } from './activity.entity'
import { ActivitiesService } from './activities.service'

@Controller('activities')
export class ActivitiesController extends BaseController<ActivitiesService, Activity, ActivityDto> {
  constructor(usersService: ActivitiesService) {
    super(usersService)
  }

  @Post()
  async create(@Body() taskActivityItem: ActivityDto | ActivityDto[]): Promise<DeepPartial<Activity> | DeepPartial<Activity>[]> {
    return super.create(taskActivityItem)
  }

  @Get()
  async getAll(): Promise<Activity[]> {
    return super.getAll()
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<Activity> {
    return super.getById(id)
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return super.deleteById(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: Activity): Promise<Activity> {
    return super.update(id, body)
  }
}
