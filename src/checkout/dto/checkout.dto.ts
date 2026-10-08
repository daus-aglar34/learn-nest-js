import {
    ArrayMaxSize,
    ArrayMinSize,
    IsArray,
    IsBoolean,
    IsIn,
    IsInt,
    IsNumber,
    IsOptional,
    IsString,
    MaxLength,
    Min,
    MinLength,
    ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CheckoutDto {
    @IsOptional()
    @IsBoolean()
    member?: boolean = false;

    @IsOptional()
    @IsString()
    @IsIn(['HEMAT10', 'HEMAT20', 'FREESHIP'])
    coupon?: string;

    @IsArray()
    @ArrayMinSize(1)
    @ArrayMaxSize(20)
    @ValidateNested({ each: true })
    @Type(() => CheckoutItemDto)
    items: CheckoutItemDto[];
}

class CheckoutItemDto {
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    name: string;

    @IsNumber()
    @Min(0)
    price: number;

    @IsNumber()
    @IsInt()
    @Min(1)
    qty: number;
}