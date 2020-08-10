import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.page.html'
})
export class CounterPage {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
