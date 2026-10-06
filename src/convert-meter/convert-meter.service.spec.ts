import { Test, TestingModule } from '@nestjs/testing';
import { ConvertMeterService } from './convert-meter.service.js';

describe('ConvertMeterService', () => {
  let service: ConvertMeterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConvertMeterService],
    }).compile();

    service = module.get<ConvertMeterService>(ConvertMeterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
