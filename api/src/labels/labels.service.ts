import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseService } from '../base.service'
import { Repository } from 'typeorm'
import { LabelDto } from '@app/models'
import { Label } from './label.entity'

@Injectable()
export class LabelsService extends BaseService<Label, LabelDto> {
  constructor(
    @InjectRepository(Label)
    repo: Repository<Label>,
  ) { super(repo)}
}
