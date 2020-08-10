import { Component } from '@angular/core';

@Component({
  selector:    'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls:   ['./calculator.page.css']
})
export class CalculatorPage {

  public firstNumber:  number;
  public secondNumber: number;
  public result?:      number;

  public add() {
    this.result = this.firstNumber + this.secondNumber;
  }

  public sub() {
    this.result = this.firstNumber - this.secondNumber;
  }

  public mul() {
    this.result = this.firstNumber * this.secondNumber;
  }

  public div() {
    this.result = this.firstNumber / this.secondNumber;
  }
}
