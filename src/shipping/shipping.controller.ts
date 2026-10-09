import { Controller, Post, Param, Query, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { ShippingService } from './shipping.service.js';
import { ShippingBodyDto, ShippingParamsDto, ShippingQueryDto } from './dto/shipping.dto.js';

@Controller('shipping')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) { }

  @Post(':city')
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  calculateShipping(
    @Body() body: ShippingBodyDto,
    @Param() param: ShippingParamsDto,
    @Query() query: ShippingQueryDto,
  ) {
    return this.shippingService.calculateShipping(body, param, query);
  }
}