import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
})
export class FruitsComponent {
  enteredFruitName = '';
  @Input() fruitList: string[];

  addFruitName() {
    this.fruitList.push(this.enteredFruitName);
  }
}
