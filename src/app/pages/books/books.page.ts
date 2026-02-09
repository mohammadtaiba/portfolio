import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../shared/section.component';
import { BOOKS } from '../../data/portfolio-data';

@Component({
  standalone: true,
  imports: [CommonModule, SectionComponent],
  templateUrl: './books.page.html',
  styleUrl: './books.page.css',
})
export class BooksPage {
  books = BOOKS;
}
