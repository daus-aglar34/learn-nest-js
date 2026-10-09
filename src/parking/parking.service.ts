import { Injectable } from '@nestjs/common';
import { ParkingDto } from './dto/parking.dto.js';

@Injectable()
export class ParkingService {
    calculateParking(dto: ParkingDto) {
        const { vehicle, weekend, hours } = dto
        let hourlyRate: number
        const billedHours: number = Math.round(hours)

        if (vehicle === 'motor') {
            hourlyRate = 2000
        } else if (vehicle === 'car') {
            hourlyRate = 8000
        } else if (vehicle === 'bus') {
            hourlyRate = 15000
        } else {
            hourlyRate = 0
        }

        return {
            success: true,
            message: "Parking fee calculated",
            data: {
                hours: hours,
                billedHours: billedHours,
                vehicle: vehicle,
                hourlyRate: hourlyRate,
                weekendSurcharge: 0.2,
                total: billedHours * hourlyRate * (weekend ? 1.2 : 1)
            }
        }
    }
}
