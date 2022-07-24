import { User } from '../../users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.assets, { eager: true })
  @JoinColumn()
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
}
