import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CreateIntegrationDto } from './dto/create-integration.dto';
import { UpdateIntegrationDto } from './dto/update-integration.dto';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { CoinCapAsset } from 'src/assets/interfaces/CoinCap/asset';

@Injectable()
export class IntegrationsService {
  constructor(private readonly httpService: HttpService) {}
  private readonly baseUrl: string = 'https://api.coincap.io/v2';

  create(createIntegrationDto: CreateIntegrationDto) {
    return 'This action adds a new integration';
  }

  async getAllAssets(limit?: number, offset?: number): Promise<AxiosResponse<CoinCapAsset[]>> {
    const url = `${this.baseUrl}/assets?limit=${limit}&offset=${offset}`;
    const res = await this.httpService
      .get(url)
      .toPromise();
    return res.data;
  }

  async getAssetsValue(id: string, quantity: number): Promise<string> {
    const url = `${this.baseUrl}/assets/${id}`;
    const asset = await this.httpService
      .get(url)
      .toPromise();
      const res = `$${(asset.data.data.priceUsd * quantity).toFixed(2)}`;
      return res;
  }

  findOne(id: number) {
    return `This action returns a #${id} integration`;
  }

  update(id: number, updateIntegrationDto: UpdateIntegrationDto) {
    return `This action updates a #${id} integration`;
  }

  remove(id: number) {
    return `This action removes a #${id} integration`;
  }
}
