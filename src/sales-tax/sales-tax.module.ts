import { Module } from '@nestjs/common';
import { SalesTaxService } from './sales-tax.service.js';
import { SalesTaxController } from './sales-tax.controller.js';

@Module({
  controllers: [SalesTaxController],
  providers: [SalesTaxService],
})
export class SalesTaxModule {}
