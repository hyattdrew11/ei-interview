import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetsModule } from './assets/assets.module';
import { Asset } from './assets/entities/asset.entity';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { IntegrationsModule } from './integrations/integrations.module';
import { AuthorizationModule } from './authorization/authorization.module';

@Module({
  imports: [
    UsersModule,
    AssetsModule,
    IntegrationsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: process.env.DATABASE_USER,
      database: 'ei-interview',
      entities: [User, Asset],
      synchronize: true,
      autoLoadEntities: true
    }),
    IntegrationsModule,
    AuthorizationModule
  ]
})
export class AppModule {}
