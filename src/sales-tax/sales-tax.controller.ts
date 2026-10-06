import { Controller, Get, Query } from '@nestjs/common';
import { SalesTaxService } from './sales-tax.service.js';
import { TaxDto } from './dto/sales-tax.dto.js';

@Controller('tax')
export class SalesTaxController {
  constructor(private readonly salesTaxService: SalesTaxService) { }

  @Get()
  countTax(@Query() dto: TaxDto) {
    return this.salesTaxService.countTax(dto);
  }
}