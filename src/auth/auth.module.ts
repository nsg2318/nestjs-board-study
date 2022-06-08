import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from './user.entity';

@Module({
  imports: [User],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
