import { ExpressCassandraModule } from '@iaminfinity/express-cassandra';
import { Module } from '@nestjs/common';
import { MovieEntity } from './entities/movie.entity';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  imports: [ExpressCassandraModule.forFeature([MovieEntity])],
  controllers: [MovieController],
  providers: [MovieService],
  exports: [MovieService],
})
export class MovieModule {}
