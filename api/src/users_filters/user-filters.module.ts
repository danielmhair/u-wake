import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserFilter } from './user-filter.entity'
import { UserFiltersController } from './user-filter.controller'
import { UserFiltersService } from './user-filters.service'

@Module({
  imports: [TypeOrmModule.forFeature([UserFilter])],
  providers: [UserFiltersService],
  controllers: [UserFiltersController],
})
export class UsersFiltersModule {}
