import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common'
import { DeepPartial } from 'typeorm'
import { BaseController } from '../base.controller'
import { ReminderDto } from '@app/models'
import { Reminder } from './reminder.entity'
import { RemindersService } from './reminders.service'

@Controller('reminders')
export class RemindersController extends BaseController<RemindersService, Reminder, ReminderDto> {
  constructor(remindersService: RemindersService) {
    super(remindersService)
  }

  @Post()
  async create(@Body() createReminderDto: ReminderDto | ReminderDto[]): Promise<DeepPartial<Reminder> | DeepPartial<Reminder>[]> {
    return super.create(createReminderDto)
  }

  @Get()
  async getAll(): Promise<Reminder[]> {
    return super.getAll()
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<Reminder> {
    return super.getById(id)
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return super.deleteById(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: Reminder): Promise<Reminder> {
    return super.update(id, body)
  }
}
