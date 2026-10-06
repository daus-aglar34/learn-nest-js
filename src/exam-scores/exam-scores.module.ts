import { Module } from '@nestjs/common';
import { ExamScoresService } from './exam-scores.service.js';
import { ExamScoresController } from './exam-scores.controller.js';

@Module({
  controllers: [ExamScoresController],
  providers: [ExamScoresService],
})
export class ExamScoresModule {}
