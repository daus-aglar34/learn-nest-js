import { Injectable } from '@nestjs/common';
import { SplitBillBodyDto, SplitBillParamsDto } from './dto/cartItem.dto.js';

@Injectable()
export class RestaurantBillService {
    calculateBills(params: SplitBillParamsDto, body: SplitBillBodyDto) {
        const { peopleCount } = params;
        const { items, tipPercent = 0 } = body;
        const subtotal = items.reduce(
            (total, item) => total + item.price * item.qty,
            0,
        );
        const tip = subtotal * (tipPercent / 100);
        const total = subtotal + tip;
        const perPerson = Math.round(total / peopleCount);

        return {
            success: true,
            message: 'Bill split',
            data: {
                peopleCount,
                subtotal,
                tipPercent,
                tip,
                total,
                perPerson,
            },
        }
    }
}