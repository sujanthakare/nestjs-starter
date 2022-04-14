import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-in')
  signIn() {
    return this.authService.doSignIn();
  }

  @Post('sign-up')
  signUp(@Body() dto: AuthDto) {
    return this.authService.doSignUp(dto);
  }
}
