import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Asset } from 'src/assets/entities/asset.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}
  
  async create(createUserDto: CreateUserDto) {
    // SERIALIZE POST BODY
    const userEntity =  this.usersRepository.create(createUserDto);
    // SAVE TO DB
    const res =  await this.usersRepository.save(userEntity);
    return res;
  }

   async update(id: number, updateUserDto: UpdateUserDto) {
    //  const createdAssets = [];
    //  const newAssets = updateUserDto.assets;
    //  let {assets, ...userUpdates} = updateUserDto;
     const user =  await this.usersRepository.update(id, updateUserDto);
     
    //  newAssets.forEach(async value => {
    //     const assetEntity = this.assetsRepository.create(value);
    //     const asset = await this.assetsRepository.save(assetEntity);
    //     createdAssets.push(asset);
    //   });

     return user;
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find({
      relations: {
        assets: true,
        }
      }
    );
  }

  async findOne(id: number): Promise<User> {
    const user =  await this.usersRepository.findOne({
      relations: {
        assets: true,
        },
        where: { id: id },
      }
    );
    return user;
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
