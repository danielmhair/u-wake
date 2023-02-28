import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Label } from './label.entity'
import { LabelsController } from './labels.controller'
import { LabelsService } from './labels.service'

@Module({
  imports: [TypeOrmModule.forFeature([Label])],
  providers: [LabelsService],
  controllers: [LabelsController],
})
export class LabelsModule {}
