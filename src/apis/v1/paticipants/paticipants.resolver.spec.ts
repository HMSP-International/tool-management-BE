import { Test, TestingModule } from '@nestjs/testing';
import { PaticipantsResolver } from './paticipants.resolver';
import { PaticipantsService } from './paticipants.service';

describe('PaticipantsResolver', () => {
  let resolver: PaticipantsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaticipantsResolver, PaticipantsService],
    }).compile();

    resolver = module.get<PaticipantsResolver>(PaticipantsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
