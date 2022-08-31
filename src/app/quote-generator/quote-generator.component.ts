import { Component, OnInit } from '@angular/core';
import Quotes from '../../assets/quotes.json';

@Component({
  selector: 'app-quote-generator',
  templateUrl: './quote-generator.component.html',
  styleUrls: ['./quote-generator.component.css'],
})
export class QuoteGeneratorComponent implements OnInit {
  private textWrapper = document.querySelector('.myQuote');

  public newQuote: string = '';
  public newQuoteAuthor: string = '';

  constructor() {
    this.generateNewQuote();
  }

  ngOnInit(): void {}

  public generateNewQuote(): void {
    let randomIndex = Math.floor(Math.random() * Quotes.quotes.length);
    this.newQuote = Quotes.quotes[randomIndex].quote;
    this.newQuoteAuthor = Quotes.quotes[randomIndex].author;
  }

  public sendTwitter(): void {
    window.open(
      `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text= ${this.newQuote}`,
      '_blank'
    );
  }
}
