import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';

  displaySmall: string = '';
  display: string = '';
  rechnung: string = '';
  lösung: string = '';
  boolean = false;
  test = true;
  error = false;
  regexOperator = /[+*\/]/;
  
  clear() {
    this.display = '';
    this.displaySmall = '';
    this.rechnung = '';
    this.lösung = '';
    this.boolean = false;
    this.error = false
  }
  result() {
    this.operatorCheck();
    if (this.error === false) {
      this.lösung = eval(this.rechnung);
      this.displaySmall = this.lösung;
      this.boolean = true;
      console.log(this.lösung);
    } else {
      this.displaySmall = ''
      this.display = 'Error'
    }
  }
  operatorCheck(): void {

    for (var i = 0; i < this.rechnung.length; i++) {
      if ((this.regexOperator.test(this.rechnung[i]) === true && this.regexOperator.test(this.rechnung[i + 1]) === true) || (this.rechnung[i] === '-' && this.rechnung[i + 1] === '-')) {
        this.error = true;
      }
    }
  }
  delete() {
    this.rechnung = this.rechnung.slice(0, -1);
    this.display = this.rechnung;
  }
  input(number: any): void {
    if (this.boolean === true) {
      this.displaySmall = 'Ans=' + this.lösung;
      this.rechnung = this.lösung;
      this.boolean = false;
    }
    this.rechnung += number;
    this.display = this.rechnung;
    console.log(this.test);
  }
}























