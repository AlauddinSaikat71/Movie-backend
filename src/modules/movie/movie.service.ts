import { InjectRepository, Repository } from '@iaminfinity/express-cassandra';
import { Injectable } from '@nestjs/common';
import { MovieEntity } from './entities/movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepo: Repository<MovieEntity>,
  ) {}
}
