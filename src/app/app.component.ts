import { Component, Input } from '@angular/core';
import CardComponent from './card/card.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  currentItem = 'sadsdsd';
  cardTitle:string = ""
  cards = [
    { title : "Waht is Angular", desc: "iiiizoh"},
    { title : "Getting startted",  desc: "i"},
    { title : "Learn and explorer",  desc: "h"},
    { title : "Learn and explorer",  desc: "h"},
  ]

  handleClick(value:string){
    this.cardTitle = value;
  }
}
