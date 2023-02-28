import { UserProjectDto } from '@app/models'
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common'
import { DeepPartial } from 'typeorm'
import { BaseController } from '../base.controller'
import { UserProject } from './users-projects.entity'
import { UsersProjectsService } from './users-projects.service'

@Controller('users-projects')
export class UsersProjectsController extends BaseController<UsersProjectsService, UserProject, UserProjectDto> {
  constructor(usersService: UsersProjectsService) {
    super(usersService)
  }

  @Post()
  async create(@Body() userProject: UserProjectDto | UserProjectDto[]): Promise<DeepPartial<UserProject> | DeepPartial<UserProject>[]> {
    return super.create(userProject)
  }

  @Get()
  async getAll(): Promise<UserProject[]> {
    return super.getAll()
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<UserProject> {
    return super.getById(id)
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return super.deleteById(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UserProject): Promise<UserProject> {
    return super.update(id, body)
  }
}
