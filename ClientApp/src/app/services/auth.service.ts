import { Inject, Injectable }            from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable()
export class AuthService {

  private _isLoggedIn:     boolean | Object = false;
  private _checkedStorage: boolean          = false;

  redirectUrl: string;



  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }



  private async _checkStorageIsLoggedIn() {
    const isLoggedIn = await this.storage.get('isLoggedIn');
    this._checkedStorage = true;
    if (isLoggedIn) this._isLoggedIn = isLoggedIn;
  }

  async getIsLoggedIn() {

    if (!this._checkedStorage) {
      await this._checkStorageIsLoggedIn();
    }

    return this._isLoggedIn;
  }

  authLogin(email: string, pswd: string) {

    if ((email === "raniere@email.com") && (pswd === "123456")) {
      this._isLoggedIn = {email};
      this.storage.set('isLoggedIn', {email});
      return true;
    }

    return false;
  }

  //facebookLogin(): boolean {
  //  this._isLoggedIn = true;
  //  this.storage.set('isLoggedIn', true);
  //  return true;
  //}

  logout(): boolean {
    this._isLoggedIn = false;
    this.storage.remove('isLoggedIn');
    return true;
  }
}
