// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-counter',
//   template: '<h1>Hola Counter</h1>',
// })
// export class CounterComponent {}
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{ counter }}</p>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reseteo()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  reseteo(): void {
    this.counter = 10;
  }
}
