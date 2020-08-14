import { NgModule }                            from '@angular/core';
import { BrowserModule }                       from '@angular/platform-browser';
import { FormsModule }                         from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule }                from '@angular/router';
import { StorageServiceModule }                from 'ngx-webstorage-service';

import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';

import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

import { HomePage }       from './pages/home/home.page';
import { CounterPage }    from './pages/counter/counter.page';
import { FetchDataPage }  from './pages/fetch-data/fetch-data.page';
import { CalculatorPage } from './pages/calculator/calculator.page';
import { LoginPage }      from './pages/login/login.page';

const routes: Routes = [
  { path: '',           component: HomePage,      pathMatch: 'full' },
  { path: 'counter',    component: CounterPage },
  { path: 'fetch-data', component: FetchDataPage },
  { path: 'calculator', component: CalculatorPage },
  { path: 'login',      component: LoginPage },
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomePage,
    CounterPage,
    FetchDataPage,
    CalculatorPage,
    LoginPage,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StorageServiceModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
