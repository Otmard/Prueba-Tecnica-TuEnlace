import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBusquedaDto {
  @ApiProperty()
  @IsNotEmpty()
  terminoBusqueda: string;

  @ApiProperty()
  @IsNumber()
  idArticuloSelecionado: number;
}
