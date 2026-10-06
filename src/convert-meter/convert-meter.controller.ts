import { Controller, Get, Param } from '@nestjs/common';
import { ConvertMeterService } from './convert-meter.service.js';
import { MeterDto } from './dto/convert-meter.dto.js';

@Controller('convert-meter')
export class ConvertMeterController {
  constructor(private readonly convertMeterService: ConvertMeterService) { }
  @Get('/length/:meters')
  calculateMeter(@Param() meters: MeterDto) {
    return this.convertMeterService.calculateMeter(meters)
  }
}
