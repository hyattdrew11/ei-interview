
import { Asset } from '../../assets/entities/asset.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  //  @OneToMany(type => Asset, asset => asset.id)
  //  assets: Asset[];
}