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

  async getAllAssets(search?: string, ids?: string, limit?: number, offset?: number): Promise<AxiosResponse<CoinCapAsset[]>> {
    const res = await this.httpService
      .get(`${this.baseUrl}/assets?search=${search}&ids=${ids}&limit=${limit}&offset=${offset}`)
      .toPromise();
    return res.data;
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
