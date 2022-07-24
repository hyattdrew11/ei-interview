import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from './assets/entities/asset.entity';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      database: 'ei-interview',
      entities: [User, Asset],
      synchronize: true,
      autoLoadEntities: true
    })
  ]
})
export class AppModule {}
