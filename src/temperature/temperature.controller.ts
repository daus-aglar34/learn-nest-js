import { Controller, Get, Param, Query, BadRequestException } from '@nestjs/common';
import { TemperatureService } from './temperature.service.js';
import { DegreeParamsDto, DegreeQueryDto } from './dto/value.dto.js';

@Controller('temperature')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) { }

  @Get(':value/convert')
  convertTemperature(
    @Param() params: DegreeParamsDto,
    @Query() query: DegreeQueryDto,
  ) {
    if (query.from === query.to) {
      throw new BadRequestException('to must be different from from');
    }
    return this.temperatureService.convert(params, query);
  }
}