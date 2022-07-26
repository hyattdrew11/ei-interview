import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { IntegrationsService } from './integrations.service';
import { IntegrationsController } from './integrations.controller';
import { HttpModule } from '@nestjs/axios';
import { AuthMiddleware } from 'src/authorization/authorization.middleware';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [IntegrationsController],
  providers: [IntegrationsService]
})
export class IntegrationsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(IntegrationsController)
  }
}
