import { Controller, Post, Param, Query, Body } from '@nestjs/common';
import { LoanService } from './loans.service.js';
import { LoanParamsDto, LoanQueryDto, LoanBodyDto } from './dto/loans.dto.js';

@Controller('loans')
export class LoanController {
  constructor(private readonly loanService: LoanService) { }

  // Endpoint: POST /loans/:principal/installment
  @Post(':principal/installment')
  calculateInstallment(
    @Param() params: LoanParamsDto,
    @Query() query: LoanQueryDto,
    @Body() body: LoanBodyDto,
  ) {
    return this.loanService.calculate(params, query, body);
  }
}