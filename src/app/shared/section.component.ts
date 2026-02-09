import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section">
      <div class="head">
        <h2>{{ title }}</h2>
        <p *ngIf="subtitle" class="sub">{{ subtitle }}</p>
      </div>
      <ng-content />
    </section>
  `,
  styles: [`
    .section{ margin: 18px 0 26px; }
    .head{ margin-bottom: 12px; }
    h2{ margin: 0; font-size: 18px; letter-spacing: .2px; }
    .sub{ margin: 6px 0 0; color: var(--muted); }
  `],
})
export class SectionComponent {
  @Input() title = '';
  @Input() subtitle?: string;
}
