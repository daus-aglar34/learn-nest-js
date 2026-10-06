import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantBillService } from './restaurant-bill.service.js';

describe('RestaurantBillService', () => {
  let service: RestaurantBillService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestaurantBillService],
    }).compile();

    service = module.get<RestaurantBillService>(RestaurantBillService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
