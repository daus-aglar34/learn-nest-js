import { Test, TestingModule } from '@nestjs/testing';
import { SalesTaxService } from './sales-tax.service.js';

describe('SalesTaxService', () => {
  let service: SalesTaxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesTaxService],
    }).compile();

    service = module.get<SalesTaxService>(SalesTaxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
