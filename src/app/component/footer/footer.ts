import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <p class="text-sm">© Dyma 2025-2026</p>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color: var(--gray-700);
      color: white;
    }
  `
})

export class Footer {

}
