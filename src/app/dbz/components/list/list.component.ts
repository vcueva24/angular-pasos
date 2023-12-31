import { Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'Trunks',
      power: 10,
    },
  ];

  // onDelete -> EventEmitter
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    //TODO Emitir el ID del personaje
    if (!id) return;
    this.onDelete.emit(id);
    // console.log({ id });
  }
}
