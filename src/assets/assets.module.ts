import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { AssetsController } from './assets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from './entities/asset.entity';
import { AuthMiddleware } from 'src/authorization/authorization.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Asset])],
  controllers: [AssetsController],
  providers: [AssetsService]
})
export class AssetsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(AssetsController);
  }
}
