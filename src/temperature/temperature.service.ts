import { Injectable } from '@nestjs/common';
import { TemperatureDto } from './dto/value.dto.js';

@Injectable()
export class TemperatureService {
    convertTemperature(dto: TemperatureDto) {
        const { value, from, to } = dto;

        let result: number;

        if (from === 'C' && to === 'F') {
            result = (value * 9 / 5) + 32;
        } else if (from === 'F' && to === 'C') {
            result = (value - 32) * 5 / 9;
        } else if (from === 'C' && to === 'K') {
            result = value + 273.15;
        } else if (from === 'K' && to === 'C') {
            result = value - 273.15;
        } else if (from === 'F' && to === 'K') {
            result = (value - 32) * 5 / 9 + 273.15;
        } else if (from === 'K' && to === 'F') {
            result = (value - 273.15) * 9 / 5 + 32;
        } else {
            result = value;
        }

        return {
            success: true,
            message: 'Temperature converted',
            data: {
                value,
                from,
                to,
                result,
            },
        };
    }
}