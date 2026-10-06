import { Body, Controller, Param, Post } from '@nestjs/common';
import { RestaurantBillService } from './restaurant-bill.service.js';
import { SplitBillParamsDto, SplitBillBodyDto } from './dto/cartItem.dto.js';

@Controller('restaurant-bill')
export class RestaurantBillController {
  constructor(private readonly restaurantBillService: RestaurantBillService) { }
  @Post(':peopleCount/split')
  splitBill(
    @Param() params: SplitBillParamsDto,
    @Body() body: SplitBillBodyDto,
  ) {
    return this.restaurantBillService.calculateBills(params, body);
  }
}
