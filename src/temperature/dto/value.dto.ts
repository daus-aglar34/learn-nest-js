import { IsIn, IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class TemperatureDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(-273.15)
    @Max(1000)
    value: number;

    @IsNotEmpty()
    @IsString()
    @IsIn(['C', 'F', 'K'])
    from: string;

    @IsNotEmpty()
    @IsString()
    @IsIn(['C', 'F', 'K'])
    to: string;
}