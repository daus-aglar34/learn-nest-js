import { Module } from '@nestjs/common';
import { RestaurantBillService } from './restaurant-bill.service.js';
import { RestaurantBillController } from './restaurant-bill.controller.js';

@Module({
  controllers: [RestaurantBillController],
  providers: [RestaurantBillService],
})
export class RestaurantBillModule {}
