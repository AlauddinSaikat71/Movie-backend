import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  MOVIERequestLogInterceptor,
  TransformInterceptor,
} from 'libs/common/src';
import { MovieService } from './movie.service';

@Controller('movie')
@ApiTags('Movie APIs')
//@ApiGuard()
@UseInterceptors(TransformInterceptor, MOVIERequestLogInterceptor)
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  public getMovie() {
    return 1;
  }
}
