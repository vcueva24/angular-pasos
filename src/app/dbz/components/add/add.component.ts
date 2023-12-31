import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    // debugger;

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    // this.character.name = '';
    // this.character.power = 0;
    // es lo mismo que arriba:
    this.character = { name: '', power: 0 };
  }
}
