import { User } from '../../users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  quantity: number;

  @ManyToOne(() => User, (user) => user.assets)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  externalId: string;

  @Column()
  rank: string;

  @Column()
  symbol: string;

  @Column()
  name: string;

  @Column()
  supply: string;

  @Column()
  maxSupply: string;

  @Column()
  marketCapUsd: string;
  @Column()
  volumeUsd24Hr: string;

  @Column()
  priceUsd: string;

  @Column()
  changePercent24Hr: string;

  @Column()
  vwap24Hr: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
