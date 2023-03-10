import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common'
import { DeepPartial } from 'typeorm'
import { BaseController } from '../base.controller'
import { UserDto } from '@app/models'
import { User } from './user.entity'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController extends BaseController<UsersService, User, UserDto> {
  constructor(usersService: UsersService) {
    super(usersService)
  }

  @Post()
  async create(@Body() userDto: UserDto | UserDto[]): Promise<DeepPartial<User> | DeepPartial<User>[]> {
    return super.create(userDto)
  }

  @Get()
  async getAll(): Promise<User[]> {
    return super.getAll()
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return super.getById(id)
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return super.deleteById(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: User): Promise<User> {
    return super.update(id, body)
  }
}
