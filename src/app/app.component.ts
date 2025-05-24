import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw';
  includeLetters = false;
  password = '';
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  passLength: number = 0;

 
  onButtonClick() {

    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.passLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomIndex];
    }
    this.password = generatedPassword;
    // console.log('Password generated  successfully!');
    // console.log('Generated Password
    // console.log(`
    //   Include Letters: ${this.includeLetters}
    //   Include Numbers: ${this.includeNumbers}
    //   Include Symbols: ${this.includeSymbols}
    //   Password Length: ${this.passLength}
    // `);
    
  }

  onChangeUseLetters(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.includeLetters = inputElement.checked;
}
  onChangeUseNumbers(event: Event) {
    // console.log('Checkbox changed!', event.target.checked);
    const inputElement = event.target as HTMLInputElement;
    this.includeNumbers = inputElement.checked;
  }
  onChangeUseSymbols(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.includeSymbols = inputElement.checked;
  }
  onChangeLength(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const parsedValue = parseInt(inputElement.value);
    if (!isNaN(parsedValue)) {
      this.passLength = parsedValue;
    }else {
      this.passLength = 0;
    }
  }
}
