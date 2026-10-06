import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConvertMeterModule } from './convert-meter/convert-meter.module.js';
import { SalesTaxModule } from './sales-tax/sales-tax.module.js';
import { ExamScoresModule } from './exam-scores/exam-scores.module.js';
import { RestaurantBillModule } from './restaurant-bill/restaurant-bill.module.js';
import { TemperatureModule } from './temperature/temperature.module.js';

@Module({
  imports: [ConvertMeterModule, SalesTaxModule, ExamScoresModule, RestaurantBillModule, TemperatureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
