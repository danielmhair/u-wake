import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common'
import { DeepPartial } from 'typeorm'
import { BaseController } from '../base.controller'
import { LabelDto } from '@app/models'
import { Label } from './label.entity'
import { LabelsService } from './labels.service'

@Controller('labels')
export class LabelsController extends BaseController<LabelsService, Label, LabelDto> {
  constructor(labelsService: LabelsService) {
    super(labelsService)
  }

  @Post()
  async create(@Body() createLabelDto: LabelDto | LabelDto[]): Promise<DeepPartial<Label> | DeepPartial<Label>[]> {
    return super.create(createLabelDto)
  }

  @Get()
  async getAll(): Promise<Label[]> {
    return super.getAll()
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<Label> {
    return super.getById(id)
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return super.deleteById(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: Label): Promise<Label> {
    return super.update(id, body)
  }
}
