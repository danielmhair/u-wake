import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserSettings } from './user_settings.entity'
import { UsersSettingsController } from './users_settings.controller'
import { UsersSettingsService } from './users_settings.service'

@Module({
  imports: [TypeOrmModule.forFeature([UserSettings])],
  providers: [UsersSettingsService],
  controllers: [UsersSettingsController],
})
export class UsersSettingsModule {}
