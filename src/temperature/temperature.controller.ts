import { Controller, Get, Param, Query, ParseFloatPipe } from '@nestjs/common';
import { TemperatureService } from './temperature.service.js';
import { TemperatureDto } from './dto/value.dto.js';

@Controller('convert')
export class TemperatureController {
  constructor(
    private readonly temperatureService: TemperatureService,
  ) { }

  @Get('temperature/:value')
  convertTemperature(
    @Param('value', ParseFloatPipe) value: number,
    @Query('from') from: string,
    @Query('to') to: string,
  ) {
    const dto: TemperatureDto = {
      value, from, to,
    };

    return this.temperatureService.convertTemperature(dto);
  }
}