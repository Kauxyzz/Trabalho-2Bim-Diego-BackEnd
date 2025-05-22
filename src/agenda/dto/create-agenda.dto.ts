import { IsString, IsNumber, IsDateString, IsOptional } from 'class-validator';

export class CreateAgendaDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsDateString()
  data: string;

  @IsString()
  hora: String;

  @IsString()
  descricao: String;

  @IsString()
  prioridade: String;
}
