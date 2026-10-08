import { Module } from '@nestjs/common';
import { LoanService } from './loans.service.js';
import { LoanController } from './loans.controller.js';

@Module({
  controllers: [LoanController],
  providers: [LoanService],
})
export class LoansModule { }
