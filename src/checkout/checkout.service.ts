import { BadRequestException, Injectable } from '@nestjs/common';
import { CheckoutDto } from './dto/checkout.dto.js';

@Injectable()
export class CheckoutService {
    calculate(dto: CheckoutDto, member: string, coupon: string) {
        const subtotal = dto.items.reduce(
            (total, item) => total + item.price * item.qty,
            0,
        );

        const isMember = member === 'true';

        let memberDiscount = 0;
        let couponDiscount = 0;

        if (isMember) {
            memberDiscount = subtotal * 0.05;
        }

        if (coupon === 'HEMAT10') {
            couponDiscount = subtotal * 0.10;
        } else if (coupon === 'HEMAT20') {
            couponDiscount = subtotal * 0.20;
        } else if (coupon === 'FREESHIP') {
            couponDiscount = 0
        } else {
            throw new BadRequestException
        }

        const totalDiscount = memberDiscount + couponDiscount;
        const grandTotal = subtotal - totalDiscount;

        return {
            success: true,
            message: 'Checkout calculated',
            data: {
                subtotal,
                member: isMember,
                coupon: coupon || null,
                discounts: {
                    member: memberDiscount,
                    coupon: couponDiscount,
                    total: totalDiscount,
                },
                grandTotal,
            },
        };
    }
}