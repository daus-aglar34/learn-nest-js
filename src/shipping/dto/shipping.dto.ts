import { IsNotEmpty, IsString, IsIn, IsOptional, IsBoolean, IsNumber, Min, Max, ValidateNested, IsEnum } from "class-validator";
import { Type, Transform } from "class-transformer";

export enum CityEnum {
    JAKARTA = 'jakarta',
    BANDUNG = 'bandung',
    SURABAYA = 'surabaya',
    MEDAN = 'medan',
    DENPASAR = 'denpasar',
}

export class ShippingParamsDto {
    @IsEnum(CityEnum, { message: 'City is Invalid' })
    city: CityEnum
}

export class ShippingQueryDto {
    @IsOptional()
    @IsBoolean()
    @Transform(({ value }) => value === 'true' || value === true)
    express?: boolean = false

    @IsOptional()
    @IsBoolean()
    @Transform(({ value }) => value === 'true' || value === true)
    insurance?: boolean = false
}

export class ShippingDimensionDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(100)
    lengthCm: number

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(100)
    widthCm: number

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(100)
    heightCm: number
}

export class ShippingBodyDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(0.1)
    @Max(30)
    weightKg: number

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ShippingDimensionDto)
    dimension: ShippingDimensionDto
}

