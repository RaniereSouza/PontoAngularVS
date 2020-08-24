import { Inject, Injectable }            from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

import { GlobalsService } from './globals.service';

@Injectable()
export class AuthService {

  private _isLoggedIn     = false;
  private _checkedStorage = false;

  redirectUrl: string;



  constructor(
    @Inject(LOCAL_STORAGE)
    private storage: StorageService,
    private globals: GlobalsService
  ) { }



  private async _checkStorageLoggedUser() {

    const loggedUser = await this.storage.get('loggedUser');

    this._checkedStorage = true;

    if (loggedUser) {
      this._isLoggedIn = true;
      this.globals.setLoggedUserData(loggedUser);
    }
  }

  async getIsLoggedIn () {

    if (!this._checkedStorage) {
      await this._checkStorageLoggedUser();
    }

    return this._isLoggedIn;
  }

  authLogin(email: string, pswd: string) {

    if ((email === 'raniere@email.com') && (pswd === '123456')) {

      this._isLoggedIn = true;
      this.globals.setLoggedUserData({email});
      this.storage.set('loggedUser', {email});

      return true;
    }

    return false;
  }

  logout() {

    this._isLoggedIn = false;
    this.globals.setLoggedUserData(false);
    this.storage.remove('loggedUser');

    return true;
  }
}
