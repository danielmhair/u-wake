import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Reminder } from './reminder.entity'
import { RemindersController } from './reminders.controller'
import { RemindersService } from './reminders.service'

@Module({
  imports: [TypeOrmModule.forFeature([Reminder])],
  providers: [RemindersService],
  controllers: [RemindersController],
})
export class RemindersModule {}
