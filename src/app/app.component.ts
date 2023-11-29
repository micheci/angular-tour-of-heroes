import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { ChildComponent } from './child/child.component';
import {FormsModule} from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule, RouterOutlet,HeroesComponent,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heros';

  message: string = '';

  onMouseOver(){
    this.message = 'Way to go 🚀';
}
items = new Array();

addItem(item: string) {
  this.items.push(item);
}
removeItem(item: string) {
  const index = this.items.indexOf(item);
  if (index !== -1) {
    this.items.splice(index, 1);
  }
}
favoriteFramework = '';
favoriteFood='';

showFood(){
  console.log(this.favoriteFood)
}
profileForm= new FormGroup({
  name: new FormControl(''),
  email: new FormControl(''),
})

handleSubmit() {
  alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
}
}
