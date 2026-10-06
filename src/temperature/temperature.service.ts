import { Injectable } from '@nestjs/common';
import { DegreeParamsDto, DegreeQueryDto } from './dto/value.dto.js';

@Injectable()
export class TemperatureService {

    convert(params: DegreeParamsDto, query: DegreeQueryDto) {
        const { value } = params;
        const { from, to } = query;

        let tempInC: number;

        if (from === 'C') {
            tempInC = value;
        } else if (from === 'F') {
            tempInC = (value - 32) * (5 / 9);
        } else {
            tempInC = value - 273.15;
        }

        let result: number;

        if (to === 'C') {
            result = tempInC;
        } else if (to === 'F') {
            result = tempInC * (9 / 5) + 32;
        } else {
            result = tempInC + 273.15;
        }

        result = Number(result.toFixed(2));

        return {
            success: true,
            message: 'Temperature converted',
            data: {
                value: value,
                from: from,
                to: to,
                result: result,
            },
        };
    }
}