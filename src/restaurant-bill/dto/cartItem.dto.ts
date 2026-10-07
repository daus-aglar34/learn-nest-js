import { Type, Transform } from "class-transformer";
import { ArrayMaxSize, ArrayMinSize, IsArray, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Min, Max, MinLength, ValidateNested } from "@nestjs/class-validator";

export class SplitBillParamsDto {
    @IsNotEmpty()
    @Type(() => Number)
    @IsInt()
    @Min(2)
    @Max(20)
    peopleCount: number
}

export class CartItemDto {
    @IsNotEmpty()
    @IsString()
    @Transform(({value}) => (typeof value === 'string' ? value.trim() : value))
    @MinLength(2)
    @MaxLength(50)
    name: string

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    price: number

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    qty: number
}

export class SplitBillBodyDto {
    @IsNotEmpty()
    @IsArray()
    @ArrayMinSize(1)
    @ArrayMaxSize(30)
    @ValidateNested({each:true})
    @Type(() => CartItemDto)
    items: CartItemDto[]

    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(30)
    tipPercent?: number = 0
}