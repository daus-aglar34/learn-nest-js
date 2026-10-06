import { Test, TestingModule } from '@nestjs/testing';
import { ExamScoresController } from './exam-scores.controller.js';
import { ExamScoresService } from './exam-scores.service.js';

describe('ExamScoresController', () => {
  let controller: ExamScoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExamScoresController],
      providers: [ExamScoresService],
    }).compile();

    controller = module.get<ExamScoresController>(ExamScoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
