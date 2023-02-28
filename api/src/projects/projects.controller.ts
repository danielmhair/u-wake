import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common'
import { DeepPartial } from 'typeorm'
import { BaseController } from '../base.controller'
import { ProjectDto } from '@app/models'
import { Project } from './project.entity'
import { ProjectsService } from './projects.service'

@Controller('projects')
export class ProjectsController extends BaseController<ProjectsService, Project, ProjectDto> {
  constructor(projectsService: ProjectsService) {
    super(projectsService)
  }

  @Post()
  async create(@Body() createProjectDto: ProjectDto | ProjectDto[]): Promise<DeepPartial<Project> | DeepPartial<Project>[]> {
    return super.create(createProjectDto)
  }

  @Get()
  async getAll(): Promise<Project[]> {
    return super.getAll()
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<Project> {
    return super.getById(id)
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return super.deleteById(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: Project): Promise<Project> {
    return super.update(id, body)
  }
}
