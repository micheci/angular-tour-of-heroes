import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  @Input() name:string=''

  hero : Hero={
    id:1,
    name:'Windstorm'
      }

  greet():void{
    console.log('xddd')
  }
}
