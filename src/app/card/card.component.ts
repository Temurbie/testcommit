import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export default class CardComponent {

  @Input() title!:string;
  @Input() desc!:string;
  @Output() myTitleChange = new EventEmitter<string>();
  @Input() item = ''; // decorate the property with @Input()
  
  testfn(){
    this.myTitleChange.emit(this.title);
  }
}
