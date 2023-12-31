import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 45;

  //getter
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  //metodo
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 15;
  }

  resetForm(): void {
    this.age = 45;
    this.name = 'iroman';
  }
}
