import { Injectable } from '@nestjs/common';
import { MeterDto } from './dto/convert-meter.dto.js';

@Injectable()
export class ConvertMeterService {
    calculateMeter(dto: MeterDto) {
        const lengthM = dto.meters
        const lengthKm = lengthM / 1000
        const lengthCm = lengthM * 100
        const lengthMil = lengthM / 1609.344
        return {
            "success": true,
            "message": "Length converted",
            "data": {
                "meters": lengthM,
                "kilometers": lengthKm,
                "centimeters": lengthCm,
                "miles": lengthMil
            }
        }
    }

}
