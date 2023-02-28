import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Priority } from './priority.entity'
import { PrioritiesController } from './priorities.controller'
import { PrioritiesService } from './priorities.service'

@Module({
  imports: [TypeOrmModule.forFeature([Priority])],
  providers: [PrioritiesService],
  controllers: [PrioritiesController],
})
export class PrioritiesModule {}
