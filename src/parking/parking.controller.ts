import { Controller, Get, Param, ParseFloatPipe, Query } from '@nestjs/common';
import { ParkingService } from './parking.service.js';
import { ParkingDto } from './dto/parking.dto.js';

@Controller('parking')
export class ParkingController {
  constructor(private readonly parkingService: ParkingService) { }

  @Get(':hours')
  calculateParking(
    @Param('hours', ParseFloatPipe) hours: number,
    @Query('vehicle') vehicle: string,
    @Query('weekend') weekend: boolean
  ) {
    const dto: ParkingDto = {
      hours, vehicle, weekend
    }
    return this.parkingService.calculateParking(dto)
  }
}
