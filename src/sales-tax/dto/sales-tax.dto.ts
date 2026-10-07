import { Transform, Type } from "class-transformer";
import { IsNotEmpty, IsNumber, Min, Max, IsOptional, IsBoolean } from "@nestjs/class-validator";

export class TaxDto {
    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    amount: number;

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    @Max(100)
    rate: number;

    @IsOptional()
    @Transform(({ value }) => {
        if (value === 'true' || value === true) return true;
        if (value === 'false' || value === false) return false;
        return undefined;
    })
    @IsBoolean()
    inclusive?: boolean;
}