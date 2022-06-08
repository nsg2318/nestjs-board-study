import { Body, Controller, Post } from '@nestjs/common';
import { User } from './user.entity';
import { AuthCredentialDto } from './dto/AuthCredentialDto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  createUser(
    @Body('authCredentialDto') authCredentialDto: AuthCredentialDto,
  ): Promise<User> {
    return this.authService.createUser(authCredentialDto);
  }
}
