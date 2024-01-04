import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [MainPageComponent, ListComponent, AddComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
})
export class DbzModule {}



function stop() {
  throw new Error('Function not implemented.');
}
function sad(): void {
  throw new Error('Function not implemented.');
}

function beAwesome() {
  throw new Error('Function not implemented.');
}

