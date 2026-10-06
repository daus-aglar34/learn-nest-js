import { Injectable } from '@nestjs/common';
import { ScoresDto } from './dto/exam-scores.dto.js';

@Injectable()
export class ExamScoresService {
    countScores(dto: ScoresDto) {
        // Ekstrak langsung dengan nilai default 70 untuk passMark
        const { scores, passMark = 70 } = dto;

        return {
            success: true,
            message: "Score summary calculated",
            data: {
                count: scores.length,
                average: scores.reduce((total, current) => total + current, 0) / scores.length,
                highest: Math.max(...scores),
                lowest: Math.min(...scores),
                passMark: passMark,
                passedCount: scores.filter(score => score >= passMark).length,
                failed: scores.filter(score => score < passMark).length
            }
        };
    }
}