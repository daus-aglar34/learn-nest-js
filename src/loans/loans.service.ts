import { Injectable } from '@nestjs/common';
import { LoanParamsDto, LoanQueryDto, LoanBodyDto } from './dto/loans.dto.js';

@Injectable()
export class LoanService {
    calculate(params: LoanParamsDto, query: LoanQueryDto, body: LoanBodyDto) {
        const { principal } = params;
        const { currency } = query;
        const { months, annualInterestRate } = body;

        // Contoh Perhitungan Flat Rate:
        // 1. Hitung total bunga selama periode pinjaman
        // Bunga = Pokok * (Bunga Tahunan / 100) * (Bulan / 12)
        const totalInterest = principal * (annualInterestRate / 100) * (months / 12);

        // 2. Hitung total yang harus dibayar
        const totalPayment = principal + totalInterest;

        // 3. Hitung cicilan per bulan
        const monthlyInstallment = totalPayment / months;

        return {
            success: true,
            message: "Monthly installment calculated",
            data: {
                principal,
                currency,
                months,
                annualInterestRate,
                installment: Math.round(monthlyInstallment)
            }
        };
    }
}