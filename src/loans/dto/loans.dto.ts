import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, Min, Max, IsOptional, IsIn, IsString, IsInt } from "class-validator";

export class LoanParamsDto {
    @IsNumber()
    @IsNotEmpty()
    @Type(() => Number)
    @Min(1000000)
    @Max(1000000000)
    principal: number
}

export class LoanQueryDto {
    @IsOptional()
    @IsString()
    @IsIn(['IDR', 'USD'])
    currency?: string = 'IDR'
}

export class LoanBodyDto {
    @IsNotEmpty()
    @IsInt()
    @Min(1)
    @Max(60)
    months: number

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(50)
    annualInterestRate: number
}