import { Module } from '@nestjs/common';
import { agendaService } from './agenda.service';
import { AgendaController } from './agenda.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [AgendaController],
  providers: [agendaService, PrismaService],
})
export class AgendaModule {}
