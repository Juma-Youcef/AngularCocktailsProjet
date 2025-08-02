import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class="flex-auto">Cocktails</div>
    <ul>
      <li>
        <a href="#">Liste des cocktails</a>
        <a href="#">Panier</a>
      </li>
    </ul>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: row;
      background-color:var(--primary);
      color: white;
      height: 56px;
    }
    .flex-auto {
      flex: 1;
    }

  `
})


export class Header {

}
