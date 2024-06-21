import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';
import { FruitsComponent } from './fruits/fruits.component';

//Angular thinks in Modules. This module below is imported from angular-core subpackage.Module is a bundle of features and components and etc. You need at least 1 module per 1 Angular app.
@NgModule({
  // NgModule is one of the many 'decorators' of Angular. Refer to official doc for more detailed info. This NgModule can be added only in front of a class. It then adds meta data behind the scenes, and this meta data allows angular to turn the class into a class which contains definition of different angular features that should work together.
  //Think of this as a global configuration for your (part of) angular app.
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonInputComponent,
    FruitsComponent,
  ], // Define all the components you want to use in this module
  imports: [BrowserModule, AppRoutingModule, FormsModule], // You can import other modules into this module.
  providers: [],
  bootstrap: [AppComponent], //This is a special key, typically used only for AppModule to define your root component, which should be mounted on the browser when the app starts. You typically have only 1 root component.
})
export class AppModule {}
// Behind the scene, this is compiled to constructor function in JavaScript.
