
import { Component } from '@angular/core';
import {CocktailsDetails} from './components/cocktails-details/cocktails-details';
import {CocktailsListe} from './components/cocktails-liste/cocktails-liste';


@Component({
  selector: 'app-cocktails',
  imports: [CocktailsDetails,CocktailsListe],
  template: `
    <app-cocktails-list class="flex-auto card" />
    <app-cocktails-details class="flex-auto card" />
  `,
  styles: `
    :host {
      display: flex;
      gap:24px;
      padding: 24px;
    }
  `,
})
export class Cocktails {

}
