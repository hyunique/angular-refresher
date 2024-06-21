import { Component } from '@angular/core';

//@component is also one of the decorators. Like NgModule, this is also to provide a meta data.
@Component({
  selector: 'app-root', //This is in index.html
  templateUrl: './app.component.html', //This is an actual html code that will be added to app-root
  styleUrl: './app.component.css', //This style sheet is scoped to the template of this component
})
export class AppComponent {
  title = 'ionic-angular-02';
  persons: string[] = ['Petra', 'Chris', 'Elena'];
  fruits: string[] = ['apple', 'peach', 'pear'];
  //: string[] needs to match with actual type. This can be omitted and will be automatically recognized by Typescript
  onPersonCreated(name: string) {
    this.persons.push(name);
  }
}
