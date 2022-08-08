import {
  MOVIERequestLogInterceptor,
  MOVIEValidationPipe,
  TransformInterceptor,
} from '@movie/common';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
@ApiTags('User APIs')
//@ApiGuard()
@UsePipes(MOVIEValidationPipe)
@UseInterceptors(TransformInterceptor, MOVIERequestLogInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('sign-up')
  @HttpCode(HttpStatus.OK)
  public createUser(@Body() body: CreateUserDTO) {
    return this.userService.createUser(body);
  }
}
