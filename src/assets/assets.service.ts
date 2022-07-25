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
     // SERIALIZE POST BODY
    const assetEntity =  this.assetsRepository.create(createAssetDto);
    // SAVE TO DB
    const res =  await this.assetsRepository.save(assetEntity);
    return res;
  }

  findAll() {
    return `This action returns all assets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} asset`;
  }

  update(id: number, updateAssetDto: UpdateAssetDto) {
    return `This action updates a #${id} asset`;
  }

  remove(id: number) {
    return `This action removes a #${id} asset`;
  }
}
