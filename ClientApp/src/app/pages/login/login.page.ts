import { Component }  from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector:    'app-login',
  templateUrl: './login.page.html',
  styleUrls:   ['./login.page.css']
})
export class LoginPage {

  public email: string;
  public pswd:  string;

  constructor(private auth: AuthService, private router: Router) { }

  handleLogin() {

    const email = this.email,
          pswd  = this.pswd;

    if (email && pswd) {
      if (this.auth.authLogin(email, pswd)) {
        alert("Bem vindo! Login realizado com sucesso.");
        this.router.navigate(['/']);
      }
      else {
        alert("Email ou senha incorretos!");
      }
    }
    else {
      alert("Preencha todos os campos!");
    }
  }
}
