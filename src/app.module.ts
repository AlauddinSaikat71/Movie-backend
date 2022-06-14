import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { DatabaseModule } from './database/database.module';
import { MovieModule } from './modules/movie/movie.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    EventEmitterModule.forRoot({
      global: true,
      wildcard: true,
      delimiter: '.',
    }),
    DatabaseModule,
    MovieModule,
  ],
})
export class AppModule {}
