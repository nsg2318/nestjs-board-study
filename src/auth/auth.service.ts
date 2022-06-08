import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { AuthCredentialDto } from './dto/AuthCredentialDto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(authCredentialDto: AuthCredentialDto): Promise<User> {
    const { username, password } = authCredentialDto;
    const user = await this.userRepository.create({ username, password });
    return this.userRepository.save(user);
  }
}
