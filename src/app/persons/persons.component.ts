import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-persons', //when naming, try to write app-name format. It's a common convention and it will prevent clashing with other selectors like h1.
  templateUrl: './persons.component.html',
})
export class PersonsComponent {
  @Input() personList: string[];
}

//This component is imported in app.module
