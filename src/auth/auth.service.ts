import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto';

@Injectable({})
export class AuthService {
  doSignIn() {
    return {
      msg: 'I am from do sign in',
    };
  }

  /**
   *
   *
   */
  async doSignUp(dto: AuthDto) {
    return {
      msg: 'I am signup',
    };
  }
}
