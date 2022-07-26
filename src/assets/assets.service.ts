import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { Asset } from './entities/asset.entity';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(Asset)
    private assetsRepository: Repository<Asset>
  ) {}
  async create(createAssetDto: CreateAssetDto) {
    const assetEntity = this.assetsRepository.create(createAssetDto);
    const res = await this.assetsRepository.save(assetEntity);
    return res;
  }

  findAll() {
    return this.assetsRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} asset`;
  }

  // update(id: number, updateAssetDto: UpdateAssetDto) {
  //   return `This action updates a #${id} asset`;
  // }

  remove(id: number) {
    return this.assetsRepository.delete(id);
  }
}
