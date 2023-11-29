import { Component,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Output() addItemEvent = new EventEmitter<string>();
  @Output() removeItemEvent=new EventEmitter<string>();

addItem(){
  this.addItemEvent.emit('car')
}
removeItem(){
  this.removeItemEvent.emit('car')
}
}
