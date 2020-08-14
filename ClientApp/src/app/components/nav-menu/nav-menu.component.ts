import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { GlobalsService, UserData } from '../../services/globals.service';
import { AuthService }              from '../../services/auth.service';

@Component({
  selector:    'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls:   ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit, OnDestroy {

  private _loggedUserSub: Subscription;

  isExpanded:     boolean            = false;
  loggedUserData: boolean | UserData = false;

  constructor(private globals: GlobalsService, private auth: AuthService) {
    this._loggedUserSub = this.globals.getLoggedUserData().subscribe(value => {
      this.loggedUserData = value;
    });
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  handleLogout() {
    this.auth.logout();
  }

  async ngOnInit() {
    await this.auth.getIsLoggedIn();
  }

  ngOnDestroy() {
    this._loggedUserSub.unsubscribe();
  }
}
