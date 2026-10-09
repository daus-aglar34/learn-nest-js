import { Injectable, NotFoundException } from '@nestjs/common';
import { ShippingBodyDto, ShippingParamsDto, ShippingQueryDto } from './dto/shipping.dto.js';

@Injectable()
export class ShippingService {
    calculateShipping(dto: ShippingBodyDto, param: ShippingParamsDto, query: ShippingQueryDto) {
        const { city } = param;
        const { express, insurance } = query;
        const { lengthCm, heightCm, widthCm } = dto.dimension;
        const { weightKg } = dto;

        // 1. Hitung volumetricKg & chargeableKg
        const volumetricKg = (lengthCm * widthCm * heightCm) / 5000;
        const chargeableKg = Math.max(weightKg, volumetricKg);

        // 2. Tentukan tarif kota (Gunakan NotFoundException jika tidak ada)
        let cityFee: number;
        if (param.city === 'jakarta') {
            cityFee = 9000;
        } else if (param.city === 'bandung') {
            cityFee = 12000;
        } else if (param.city === 'surabaya') {
            cityFee = 15000;
        } else if (param.city === 'medan') {
            cityFee = 18000;
        } else if (param.city === 'denpasar') {
            cityFee = 20000;
        } else {
            throw new NotFoundException('Unsupported city');
        }

        // 3. Hitung biaya tambahan berat
        const extraKg = Math.max(0, chargeableKg - 1);
        const weightExtraFee = extraKg * 2000;

        // 4. Hitung ekspres & asuransi
        const baseAndWeightFee = cityFee + weightExtraFee;
        const expressFee = express ? baseAndWeightFee * 0.5 : 0;
        const insuranceFee = insurance ? chargeableKg * 1000 : 0;

        const total = baseAndWeightFee + expressFee + insuranceFee;

        return {
            success: true,
            message: "Shipping cost calculated",
            data: {
                city,
                express: express ?? false,
                insurance: insurance ?? false,
                weightKg,
                volumetricKg: Number(volumetricKg.toFixed(1)),
                chargeableKg: Number(chargeableKg.toFixed(1)),
                baseFare: cityFee,
                expressFee,
                insuranceFee,
                total
            }
        };
    }
}