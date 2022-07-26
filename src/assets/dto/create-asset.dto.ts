import { User } from 'src/users/entities/user.entity';

export class CreateAssetDto {
  userId: number;
  quantity: number;
  externalId: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}
