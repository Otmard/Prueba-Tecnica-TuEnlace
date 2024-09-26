import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BusquedaService } from './busqueda.service';
import { CreateBusquedaDto } from './dto/create-busqueda.dto';

@Controller('busqueda')
export class BusquedaController {
  constructor(private readonly busquedaService: BusquedaService) {}

  @Post()
  create(@Body() createBusquedaDto: CreateBusquedaDto) {
    return this.busquedaService.create(createBusquedaDto);
  }

  @Get()
  findAll() {
    return this.busquedaService.findAll();
  }

  @Get('top')
  findOne() {
    return this.busquedaService.findTop5();
  }

}
