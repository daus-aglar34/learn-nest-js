import { IsNotEmpty, IsNumber, Min, Max, IsString, IsIn } from "@nestjs/class-validator";

export class DegreeParamsDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(-273.15)
    @Max(1000)
    value: number
}

export class DegreeQueryDto {
    @IsNotEmpty()
    @IsString()
    @IsIn(['C', 'F', 'K'])
    from: string

    @IsNotEmpty()
    @IsString()
    @IsIn(['C', 'F', 'K'])
    to: string
}