import { Test, TestingModule } from '@nestjs/testing';
import { agendaService } from './agenda.service';

describe('AgendaService', () => {
  let service: agendaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [agendaService],
    }).compile();

    service = module.get<agendaService>(agendaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
