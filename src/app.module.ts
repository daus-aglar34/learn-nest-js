import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConvertMeterModule } from './convert-meter/convert-meter.module.js';
import { SalesTaxModule } from './sales-tax/sales-tax.module.js';
import { ExamScoresModule } from './exam-scores/exam-scores.module.js';
import { RestaurantBillModule } from './restaurant-bill/restaurant-bill.module.js';
import { TemperatureModule } from './temperature/temperature.module.js';
import { CheckoutModule } from './checkout/checkout.module.js';
import { LoansModule } from './loans/loans.module.js';
import { BillsModule } from './bills/bills.module.js';
import { ParkingModule } from './parking/parking.module.js';

@Module({
  imports: [ConvertMeterModule, SalesTaxModule, ExamScoresModule, RestaurantBillModule, TemperatureModule, CheckoutModule, LoansModule, BillsModule, ParkingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
