import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ConvertPipe } from '../convert.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, ConvertPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  name: string | undefined;
  date: string | undefined | null;
  amount: number | undefined;
  miles: number | undefined;

  car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    price: 20000
  }

  onNameChange(event: Event) {
    const inputElemenet = event.target as HTMLInputElement
    console.log(inputElemenet.value);
    this.name = inputElemenet.value;

  }

  onDateChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    console.log(inputElement.value);
    this.date = inputElement.value;
  }

  onAmountChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    console.log(inputElement.value);
    this.amount = parseFloat(inputElement.value);
  }
 
  onMilesChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    console.log(inputElement.value);
    this.miles = parseFloat(inputElement.value);
  }

}
