import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { IntegrationsService } from 'src/integrations/integrations.service';
import { AssetsService } from './assets.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';

@Controller('assets')
export class AssetsController {
  constructor(
    private readonly assetsService: AssetsService,
    private readonly integrationsService: IntegrationsService
    ) {}

  @Post()
  create(@Body() createAssetDto: CreateAssetDto) {
    return this.assetsService.create(createAssetDto);
  }

  @Get()
  findAll() {
    return this.assetsService.findAll();
  }

  @Get('portfolio')
  async portfolio() {
    const assets = await this.assetsService.findAll();
    let res =  { performance: [], assets: assets };
    const performance =  await Promise.all(assets.map(async item => {
      const liveAsset = await this.integrationsService.findOne(item.externalId);
      const myAssetValue = (item.quantity * parseInt(item.priceUsd));
      const liveAssetValue = (item.quantity * parseInt(liveAsset.data.priceUsd));
      // TODO: ADD COMPARISON OPERATOR FOR -/+ NET GAIN / LOSS
      if(myAssetValue > liveAssetValue) {
        const profit = myAssetValue - liveAssetValue;
        return { name: item.externalId, net: ((profit / liveAssetValue) * 100).toFixed(2)}
      }
      else {
        const loss = liveAssetValue - myAssetValue;
        return { name: item.externalId, net: ((loss / liveAssetValue) * 100).toFixed(2)}
      }

    }));
    res.performance = performance;
    return res;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assetsService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAssetDto: UpdateAssetDto) {
  //   return this.assetsService.update(+id, updateAssetDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assetsService.remove(+id);
  }
}
