import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusquedaModule } from './busqueda/busqueda.module';
import { Busqueda } from './busqueda/entities/busqueda.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Busqueda],
      synchronize: true,
    }),
    BusquedaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
