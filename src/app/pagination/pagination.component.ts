import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClassDirective } from '../class.directive';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, ClassDirective],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  checkWindowIndex(index: number){
    return Math.abs(this.currentPage - index) < 5;
  }

  images = [
    { url: 'https://picsum.photos/id/11/200/300', title: 'Image 1' },
    { url: 'https://picsum.photos/id/12/200/300', title: 'Image 2' },
    { url: 'https://picsum.photos/id/13/200/300', title: 'Image 3' },
    { url: 'https://picsum.photos/id/14/200/300', title: 'Image 4' },
    { url: 'https://picsum.photos/id/15/200/300', title: 'Image 5' },
    { url: 'https://picsum.photos/id/16/200/300', title: 'Image 6' },
    { url: 'https://picsum.photos/id/17/200/300', title: 'Image 7' },
    { url: 'https://picsum.photos/id/18/200/300', title: 'Image 8' }
  ];

  currentPage = 0;

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
  nextPage() {
    if (this.currentPage < this.images.length - 1) {
      this.currentPage++;
    }
  }
}
