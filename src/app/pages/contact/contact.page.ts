import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../shared/section.component';
import { PROFILE } from '../../data/portfolio-data';

@Component({
  standalone: true,
  imports: [CommonModule, SectionComponent],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.css',
})
export class ContactPage {
  profile = PROFILE;
  copied = '';

  async copy(text: string, label: string){
    try{
      await navigator.clipboard.writeText(text);
      this.copied = label;
      setTimeout(() => this.copied = '', 1400);
    } catch {
      // ignore
    }
  }
}
