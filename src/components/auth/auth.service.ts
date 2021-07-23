import * as bcrypt from 'bcrypt';

import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(username, pass): Promise<any> {
    const user = await this.userService.findOne(username);

    if (user) {
      const match = await bcrypt.compare(pass, user.password);

      if (match) {
        return user;
      }
    }
    return null;
  }
}
