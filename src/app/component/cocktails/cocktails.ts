import { Component, computed, signal } from '@angular/core';
import { CocktailsListComponent } from './components/cocktails-liste/cocktails-list';
import { CocktailDetailsComponent } from './components/cocktails-details/cocktails-details';
import { Cocktail } from 'app/shared/interface/interfaces';
import { cocktails } from 'app/shared/interface/data';

@Component({
  selector: 'app-cocktails',
  imports: [CocktailsListComponent, CocktailDetailsComponent],
  template: `
    <app-cocktails-list
      (selectCocktail)="selectCocktail($event)"
      [selectedCocktailName]="selectedCocktailName()"
      [cocktails]="cocktails()"
      class="w-half xs-w-full card"
    />
    <app-cocktail-details
      [cocktail]="selectedCocktail()"
      class="w-half xs-w-full card"
    />
  `,
  styles: `
    :host {
      display: flex;
      gap:24px;
      padding: 24px;
      @media screen and (max-width: 820px) {
        flex-direction: column;
      }
    }
  `,
})
export class CocktailsComponent {
  cocktails = signal<Cocktail[]>(cocktails);
  selectedCocktail = signal<Cocktail>(this.cocktails()[0]);
  selectedCocktailName = computed(() => this.selectedCocktail().name);

  selectCocktail(cocktailName: string) {
    const newCocktail = this.cocktails().find(
      ({ name }) => name === cocktailName
    );
    if (newCocktail) {
      this.selectedCocktail.set(newCocktail);
    }
  }
}
