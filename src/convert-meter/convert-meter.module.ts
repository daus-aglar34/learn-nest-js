import { Module } from '@nestjs/common';
import { ConvertMeterService } from './convert-meter.service.js';
import { ConvertMeterController } from './convert-meter.controller.js';

@Module({
  controllers: [ConvertMeterController],
  providers: [ConvertMeterService],
})
export class ConvertMeterModule {}
