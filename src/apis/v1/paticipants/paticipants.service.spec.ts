import { Test, TestingModule } from '@nestjs/testing';
import { PaticipantsService } from './paticipants.service';

describe('PaticipantsService', () => {
  let service: PaticipantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaticipantsService],
    }).compile();

    service = module.get<PaticipantsService>(PaticipantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
