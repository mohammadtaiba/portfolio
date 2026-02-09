import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page">
      <div class="card card-pad">
        <h1 style="margin:0 0 6px; font-size:24px;">Impressum</h1>
        <p class="small" style="margin:0;">Bitte hier deine echten Daten eintragen (in Deutschland wichtig).</p>
      </div>

      <div class="card card-pad" style="margin-top: 14px;">
        <h3 style="margin:0 0 8px;">Angaben gemaß § 5 TMG</h3>
        <p style="margin:0; color: var(--muted); line-height:1.7;">
          ABU OMAR<br>
          Straße Hausnummer<br>
          PLZ Ort<br>
          Deutschland
        </p>

        <hr class="sep">

        <h3 style="margin:0 0 8px;">Kontakt</h3>
        <p style="margin:0; color: var(--muted); line-height:1.7;">
          E-Mail: you@example.com
        </p>

        <hr class="sep">

        <h3 style="margin:0 0 8px;">Haftung fur Inhalte</h3>
        <p style="margin:0; color: var(--muted); line-height:1.7;">
          Platzhaltertext: Passe diesen Abschnitt an deine Situation an (private Seite / beruflich etc.).
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
export class ImpressumPage {}
