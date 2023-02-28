import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TaskActivityItem } from './task-activity.entity'
import { TasksActivityController } from './tasks-activity.controller'
import { TasksActivityService } from './tasks-activity.service'

@Module({
  imports: [TypeOrmModule.forFeature([TaskActivityItem])],
  providers: [TasksActivityService],
  controllers: [TasksActivityController],
})
export class TasksActivityModule {}
