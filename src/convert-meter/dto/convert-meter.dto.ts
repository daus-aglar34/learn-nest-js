import { IsNotEmpty, IsNumber, Min, Max } from "@nestjs/class-validator";

export class MeterDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(1000000)
    meters: number
}