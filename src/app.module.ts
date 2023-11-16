import { Module } from '@nestjs/common';
import { RequestsModule } from './api/requests/requests.module';

@Module({
  imports: [
    //api modules
    RequestsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
