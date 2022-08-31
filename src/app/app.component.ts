import { Component, OnInit } from '@angular/core';
import Quotes from '../assets/quotes.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'random-quote';
  public newQuote: string = '';

  constructor() {
    this.generateNewQuote();
  }

  public generateNewQuote(): void {
    this.newQuote =
      Quotes.quotes[Math.floor(Math.random() * Quotes.quotes.length)].quote;
  }
}
