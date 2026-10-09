import { Body, Controller, Post } from '@nestjs/common';
import { BillsService } from './bills.service.js';
import { ElectricityBillDto, MeterKwhDto } from './dto/bills.dto.js';


@Controller('bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) { }

  @Post('electricity')
  calculateKwh(@Body() dto: ElectricityBillDto) {
    return this.billsService.calculateKwh(dto)
  }
}
