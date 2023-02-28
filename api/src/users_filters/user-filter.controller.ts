import { UserFilterDto } from '@app/models'
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common'
import { DeepPartial } from 'typeorm'
import { BaseController } from '../base.controller'
import { UserFilter } from './user-filter.entity'
import { UserFiltersService } from './user-filters.service'

@Controller('users-filters')
export class UserFiltersController extends BaseController<UserFiltersService, UserFilter, UserFilterDto> {
  constructor(usersService: UserFiltersService) {
    super(usersService)
  }

  @Post()
  async create(@Body() userDto: UserFilterDto | UserFilterDto[]): Promise<DeepPartial<UserFilter> | DeepPartial<UserFilter>[]> {
    return super.create(userDto)
  }

  @Get()
  async getAll(): Promise<UserFilter[]> {
    return super.getAll()
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<UserFilter> {
    return super.getById(id)
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return super.deleteById(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UserFilter): Promise<UserFilter> {
    return super.update(id, body)
  }
}
