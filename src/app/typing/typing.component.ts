import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-typing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typing.component.html',
  styleUrl: './typing.component.css'
})
export class TypingComponent {

 randomText: string = faker.lorem.sentence(5);
 enteredText: string = '';


 onInput(event:Event){
  const input = event.target as HTMLInputElement;
  this.enteredText = input.value.trim();
  console.log(`Entered text: ${this.enteredText}`);
  
 }

 compare(letter: string, input: string){
  if (!input) {
    return 'default';
  }
  return letter === input ? 'correct' : 'incorrect';
 }

}
