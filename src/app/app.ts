import { Component, signal } from '@angular/core';
import { Footer } from './component/footer/footer';
import { Header } from './component/header/header';
import { Cocktails } from './component/cocktails/cocktails';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Footer, Header, Cocktails],
  template: `
    <app-header></app-header>
    <app-cocktails></app-cocktails>
    <app-footer></app-footer>

  `,
  styles: [`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    app-cocktails {
      flex: 1;
    }
  `]
})
export class App {
  protected readonly title = signal('Project');
}
