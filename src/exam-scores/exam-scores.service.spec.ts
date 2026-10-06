import { Test, TestingModule } from '@nestjs/testing';
import { ExamScoresService } from './exam-scores.service.js';

describe('ExamScoresService', () => {
  let service: ExamScoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExamScoresService],
    }).compile();

    service = module.get<ExamScoresService>(ExamScoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
