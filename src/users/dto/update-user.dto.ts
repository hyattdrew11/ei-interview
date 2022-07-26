import { PartialType } from '@nestjs/mapped-types';
import { CreateAssetDto } from 'src/assets/dto/create-asset.dto';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  // assets: CreateAssetDto[];
}
