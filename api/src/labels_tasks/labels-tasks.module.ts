import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { LabelTask } from './label-task.entity'
import { LabelsTasksController } from './labels-tasks.controller'
import { LabelsTasksService } from './labels-tasks.service'

@Module({
  imports: [TypeOrmModule.forFeature([LabelTask])],
  providers: [LabelsTasksService],
  controllers: [LabelsTasksController],
})
export class LabelsTasksModule {}
