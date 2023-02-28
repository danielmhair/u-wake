import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { OwnerTask } from './owner-task.entity'
import { OwnersTasksController } from './owners-tasks.controller'
import { OwnersTasksService } from './owners-tasks.service'

@Module({
  imports: [TypeOrmModule.forFeature([OwnerTask])],
  providers: [OwnersTasksService],
  controllers: [OwnersTasksController],
})
export class OwnersTasksModule {}
