import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { UpdateAgendaDto } from './dto/update-agenda.dto';
import { Agenda } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class agendaService {
  constructor(private prisma: PrismaService) {}

  private mapToEntity(agenda: any): Agenda {
    return {
      id: agenda.id,
      descricao: agenda.descricao,
      data: agenda.data,
      hora: agenda.hora,
      prioridade: agenda.prioridade,
    };
  }

  async create(createAgendaDto: CreateAgendaDto): Promise<Agenda> {
    const agenda = await this.prisma.agenda.create({
      data: {
        data: createAgendaDto.data,
        hora: createAgendaDto.hora,
        descricao: createAgendaDto.descricao,
        prioridade: createAgendaDto.prioridade,
      },
    });
    return this.mapToEntity(agenda);
  }

  async findAll(): Promise<Agenda[]> {
    const agenda = await this.prisma.agenda.findMany();
    return agenda.map((agenda) => this.mapToEntity(agenda));
  }

  async findOne(id: String): Promise<Agenda> {
    const agenda = await this.prisma.agenda.findUnique({
      where: { id },
    });
    if (!agenda) {
      throw new NotFoundException(`This action returns a #${id} agenda`);
    }
    return this.mapToEntity(agenda);
  }

  async update(id: String, updateAgendaDto: UpdateAgendaDto): Promise<Agenda> {
    const agendaExistente = await this.prisma.agenda.findUnique({
      where: { id },
    });

    if (!agendaExistente) {
      throw new NotFoundException(`Agenda com ID ${id} não encontrada`);
    }

    const agendaAtualizada = await this.prisma.agenda.update({
      where: { id },
      data: updateAgendaDto,
    });

    return this.mapToEntity(agendaAtualizada);
  }

  async remove(id: String): Promise<Agenda> {
    const agendaExistente = await this.prisma.agenda.findUnique({
      where: { id },
    });

    if (!agendaExistente) {
      throw new NotFoundException(`Agenda com ID ${id} não encontrada`);
    }

    const agendaRemovida = await this.prisma.agenda.delete({
      where: { id },
    });

    return this.mapToEntity(agendaRemovida);
  }
}
