import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { CardComponent } from "./card/card.component";
import { TypingComponent } from "./typing/typing.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, PasswordGeneratorComponent, CardComponent, TypingComponent]
})
export class AppComponent {
  title = 'pw';
  posts = [
    { title: 'Tree', imageUrl: 'assets/tree.jpeg ', username: '@User1 ', content: 'Content of Post 1' },
    { title: 'Biking', imageUrl: 'assets/biking.jpeg ', username: '@User2 ', content: 'Content of Post 2' },
    { title: 'Mountain', imageUrl: 'assets/mountain.jpeg ', username: '@User3 ', content: 'Content of Post 3' }
  ];
  
}
