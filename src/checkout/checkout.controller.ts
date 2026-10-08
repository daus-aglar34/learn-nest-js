import { Body, Controller, Post, Query } from '@nestjs/common';
import { CheckoutService } from './checkout.service.js';
import { CheckoutDto } from './dto/checkout.dto.js';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) { }

  @Post('discount')
  calculate(
    @Query('member') member: string,
    @Query('coupon') coupon: string,
    @Body() dto: CheckoutDto,
  ) {
    return this.checkoutService.calculate(dto, member, coupon);
  }
}