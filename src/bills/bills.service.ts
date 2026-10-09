import { Injectable, Body, BadRequestException } from '@nestjs/common';
import { ElectricityBillDto } from './dto/bills.dto.js';

@Injectable()
export class BillsService {
    calculateKwh(dto: ElectricityBillDto) {
        const { meter, customerName, rates } = dto
        const { currentKwh, previousKwh } = meter
        const { baseFee, perKwh, taxRate = 11 } = rates
        let usageKwh: number = currentKwh - previousKwh
        let usageFee: number = usageKwh * perKwh
        let subtotal: number = usageFee + baseFee
        let tax: number = subtotal * taxRate / 100

        if (currentKwh <= previousKwh) {
            BadRequestException
        } else {
            return {
                success: true,
                message: "Electricity bill calculated",
                data: {
                    customerName: customerName,
                    usageKwh: usageKwh,
                    baseFee: baseFee,
                    usageFee: usageFee,
                    subtotal: subtotal,
                    taxRate: taxRate,
                    tax: tax,
                    total: subtotal + tax
                }
            }
        }
    }
}
