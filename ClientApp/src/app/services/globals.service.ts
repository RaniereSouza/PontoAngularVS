import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

export interface UserData {
  email: string;
}

@Injectable()
export class GlobalsService {

  private _loggedUserData = new Subject<boolean | UserData>();

  constructor() {
    this._loggedUserData.next(false);
  }

  getLoggedUserData() {
    return this._loggedUserData.asObservable();
  }
  setLoggedUserData(value: boolean | UserData) {
    this._loggedUserData.next(value);
  }
}
