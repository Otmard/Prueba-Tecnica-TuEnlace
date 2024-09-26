import { Module } from '@nestjs/common';
import { BusquedaService } from './busqueda.service';
import { BusquedaController } from './busqueda.controller';
import { Busqueda } from './entities/busqueda.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Busqueda])],
  controllers: [BusquedaController],
  providers: [BusquedaService],
})
export class BusquedaModule {}
