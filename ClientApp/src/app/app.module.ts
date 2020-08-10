import { NgModule }                            from '@angular/core';
import { BrowserModule }                       from '@angular/platform-browser';
import { FormsModule }                         from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule }                        from '@angular/router';

import { AppComponent } from './app.component';

import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

import { HomePage }       from './pages/home/home.page';
import { CounterPage }    from './pages/counter/counter.page';
import { FetchDataPage }  from './pages/fetch-data/fetch-data.page';
import { CalculatorPage } from './pages/calculator/calculator.page';
import { LoginPage }      from './pages/login/login.page';

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
    RouterModule.forRoot([
      { path: '',           component: HomePage,      pathMatch: 'full' },
      { path: 'counter',    component: CounterPage },
      { path: 'fetch-data', component: FetchDataPage },
      { path: 'calculator', component: CalculatorPage },
      { path: 'login',      component: LoginPage },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
