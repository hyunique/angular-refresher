import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css'],
})
export class PersonInputComponent {
  @Output() personCreate = new EventEmitter<string>();
  enteredPersonName: string = '';

  onCreatePerson(personName: string) {
    //local reference
    console.log(personName + ' added');
  }

  onCreatePerson2() {
    //two-way binding
    console.log(this.enteredPersonName + ' added');
    this.personCreate.emit(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
