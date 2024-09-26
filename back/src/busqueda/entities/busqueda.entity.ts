import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Busqueda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  terminoBusqueda: string;

  @Column({ nullable: true })
  idArticuloSelecionado: number;

  @DeleteDateColumn()
  deletedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
