import { Injectable, Optional } from '@angular/core';
import { UserServiceConfig } from '../models/user-service-config';

@Injectable()
export class UserService {
  _userName

  constructor(@Optional() config: UserServiceConfig) {
    if (config) { this._userName = config.userName; }
  }

}
