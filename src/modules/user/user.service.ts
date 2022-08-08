import {
  InjectRepository,
  Repository,
  uuid,
} from '@iaminfinity/express-cassandra';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UserEntity } from './entites/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  public createUser(dto: CreateUserDTO): Observable<UserEntity> {
    delete dto.password_confirm;

    const newUser = this.userRepo.create({ id: uuid(), ...dto });

    console.log(newUser.id.toString());
    return this.userRepo.save(newUser);
  }
}
