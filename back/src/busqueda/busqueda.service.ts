import { Injectable } from '@nestjs/common';
import { CreateBusquedaDto } from './dto/create-busqueda.dto';
import { Busqueda } from './entities/busqueda.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BusquedaService {
  constructor(
    @InjectRepository(Busqueda)
    private busquedaRepository: Repository<Busqueda>,
  ) {}
  async create(createBusquedaDto: CreateBusquedaDto) {
    const busqueda = await this.busquedaRepository.create(createBusquedaDto);
    return await this.busquedaRepository.save(busqueda);
  }

  async findAll() {
    return await this.busquedaRepository.find();
  }

  async findTop5() {
    const resultado = await this.busquedaRepository
      .createQueryBuilder('busqueda')
      .select('busqueda.idArticuloSelecionado', 'idArticuloSelecionado')
      .addSelect('COUNT(busqueda.idArticuloSelecionado)', 'conteo')
      .groupBy('busqueda.idArticuloSelecionado')
      .orderBy('conteo', 'DESC')
      .where('busqueda.idArticuloSelecionado IS NOT NULL')
      .limit(5)  // Limitar a los 5 más seleccionados
      .getRawMany();
  
    return resultado.length > 0 ? resultado : null;
  }
}
