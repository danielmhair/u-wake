import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserProject } from './users-projects.entity'
import { UsersProjectsController } from './users-projects.controller'
import { UsersProjectsService } from './users-projects.service'

@Module({
  imports: [TypeOrmModule.forFeature([UserProject])],
  providers: [UsersProjectsService],
  controllers: [UsersProjectsController],
})
export class UsersProjectsModule {}
