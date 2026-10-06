import { Test, TestingModule } from '@nestjs/testing';
import { ConvertMeterController } from './convert-meter.controller.js';
import { ConvertMeterService } from './convert-meter.service.js';

describe('ConvertMeterController', () => {
  let controller: ConvertMeterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConvertMeterController],
      providers: [ConvertMeterService],
    }).compile();

    controller = module.get<ConvertMeterController>(ConvertMeterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
