import { Test, TestingModule } from '@nestjs/testing';
import { SalesTaxController } from './sales-tax.controller.js';
import { SalesTaxService } from './sales-tax.service.js';

describe('SalesTaxController', () => {
  let controller: SalesTaxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalesTaxController],
      providers: [SalesTaxService],
    }).compile();

    controller = module.get<SalesTaxController>(SalesTaxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
