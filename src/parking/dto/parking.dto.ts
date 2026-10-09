import { IsNumber, IsNotEmpty, Min, Max, IsString, IsIn, IsOptional, IsBoolean } from "@nestjs/class-validator";

export class ParkingDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(0.5)
    @Max(24)
    hours: number

    @IsNotEmpty()
    @IsString()
    @IsIn(['car', 'motorcycle', 'bus'])
    vehicle: string

    @IsOptional()
    @IsBoolean()
    weekend?: boolean = false
}