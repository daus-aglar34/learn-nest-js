import { IsNotEmpty, IsNumber, IsOptional, IsString, Length, Min, ValidateNested } from "class-validator";
import { Transform, Type } from "class-transformer";


export class MeterKwhDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    previousKwh: number

    @IsNotEmpty()
    @IsNumber()
    currentKwh: number
}

export class RatesDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    baseFee: number

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    perKwh: number

    @IsOptional()
    @IsNumber()
    taxRate?: number = 11
}

export class ElectricityBillDto {
    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @Length(3, 80)
    customerName: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => MeterKwhDto)
    meter: MeterKwhDto

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => RatesDto)
    rates: RatesDto
}