import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector:    'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls:   ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  isExpanded: boolean          = false;
  isLoggedIn: boolean | Object = false;

  constructor(private auth: AuthService) { }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  handleLogout() {
    this.auth.logout();
    this.isLoggedIn = false;
  }

  async ngOnInit() {
    this.isLoggedIn = await this.auth.getIsLoggedIn();
  }
}
