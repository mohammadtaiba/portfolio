import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page">
      <div class="card card-pad">
        <h1 style="margin:0 0 6px; font-size:24px;">Datenschutz</h1>
        <p class="small" style="margin:0;">Bitte anpassen, je nachdem ob du Tracking, Formulare oder externe Inhalte nutzt.</p>
      </div>

      <div class="card card-pad" style="margin-top: 14px;">
        <h3 style="margin:0 0 8px;">1. Verantwortlicher</h3>
        <p style="margin:0; color: var(--muted); line-height:1.7;">
          ABU OMAR, Straße Hausnummer, PLZ Ort, Deutschland<br>
          E-Mail: you@example.com
        </p>

        <hr class="sep">

        <h3 style="margin:0 0 8px;">2. Hosting</h3>
        <p style="margin:0; color: var(--muted); line-height:1.7;">
          Platzhalter: Nenne hier deinen Hoster (z. B. Vercel/Netlify) und beschreibe kurz, welche Daten verarbeitet werden.
        </p>

        <hr class="sep">

        <h3 style="margin:0 0 8px;">3. Kontaktaufnahme</h3>
        <p style="margin:0; color: var(--muted); line-height:1.7;">
          Wenn du ein Kontaktformular einbaust, musst du hier genauer werden. Aktuell: nur Links (E-Mail, GitHub, LinkedIn).
        </p>
      </div>
    </div>
  `,
  styles: [`
    .page{ padding: 6px 0; }
    .card-pad{ padding: 18px; }
    hr.sep{ border: none; border-top: 1px solid var(--border); margin: 14px 0; }
    .small{ color: var(--muted); font-size: 13px; }
  `]
})
export class DatenschutzPage {}
