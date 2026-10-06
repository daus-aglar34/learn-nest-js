import { Body, Controller, Post } from '@nestjs/common';
import { ExamScoresService } from './exam-scores.service.js';
import { ScoresDto } from './dto/exam-scores.dto.js';

@Controller('exam-scores')
export class ExamScoresController {
  constructor(private readonly examScoresService: ExamScoresService) {}

  @Post('average')
  countScore(@Body() dto:ScoresDto){
    return this.examScoresService.countScores(dto)
  }
}
