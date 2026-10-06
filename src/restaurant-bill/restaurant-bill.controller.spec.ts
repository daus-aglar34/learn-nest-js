import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantBillController } from './restaurant-bill.controller.js';
import { RestaurantBillService } from './restaurant-bill.service.js';

describe('RestaurantBillController', () => {
  let controller: RestaurantBillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantBillController],
      providers: [RestaurantBillService],
    }).compile();

    controller = module.get<RestaurantBillController>(RestaurantBillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
