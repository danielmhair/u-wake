import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common'
import { DeepPartial } from 'typeorm'
import { BaseController } from '../base.controller'
import { UserSettingsDto } from '@app/models'
import { UserSettings } from './user_settings.entity'
import { UsersSettingsService } from './users_settings.service'

@Controller('users-settings')
export class UsersSettingsController extends BaseController<UsersSettingsService, UserSettings, UserSettingsDto> {
  constructor(usersService: UsersSettingsService) {
    super(usersService)
  }

  @Post()
  async create(@Body() userDto: UserSettingsDto | UserSettingsDto[]): Promise<DeepPartial<UserSettings> | DeepPartial<UserSettings>[]> {
    return super.create(userDto)
  }

  @Get()
  async getAll(): Promise<UserSettings[]> {
    return super.getAll()
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<UserSettings> {
    return super.getById(id)
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return super.deleteById(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UserSettings): Promise<UserSettings> {
    return super.update(id, body)
  }
}
