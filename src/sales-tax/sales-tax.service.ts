import { Injectable } from '@nestjs/common';
import { TaxDto } from './dto/sales-tax.dto.js';

@Injectable()
export class SalesTaxService {
    countTax(dto: TaxDto) {
        const { amount, rate, inclusive = false } = dto;

        let tax: number, net: number, gross: number;

        if (inclusive) {
            gross = amount;
            tax = (amount * rate) / (100 + rate);
            net = amount - tax;
        } else {
            net = amount;
            tax = amount * (rate / 100);
            gross = amount + tax;
        }

        return {
            success: true,
            message: "Tax calculated",
            data: {
                amount: amount,
                rate: rate,
                inclusive: inclusive,
                tax: tax,
                net: net,
                gross: gross
            }
        };
    }
}