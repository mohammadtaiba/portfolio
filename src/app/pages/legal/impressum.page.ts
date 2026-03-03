import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="page">
            <div class="card card-pad">
                <h1 style="margin:0 0 6px; font-size:24px;">Impressum</h1>
                <p class="small" style="margin:0;">Angaben gemäß § 5 TMG</p>
            </div>

            <div class="card card-pad" style="margin-top: 14px;">
                <h3 style="margin:0 0 8px;">Anbieter</h3>
                <p style="margin:0; color: var(--muted); line-height:1.7;">
                    Mohammad Taiba<br/>
                    Nordhäuser Str. 78<br/>
                    99089 Erfurt<br/>
                    Deutschland
                </p>

                <hr class="sep"/>

                <h3 style="margin:0 0 8px;">Kontakt</h3>
                <p style="margin:0; color: var(--muted); line-height:1.7;">
                    E-Mail: mohammadtaiba55@gmail.com<br/>
                    <!-- Telefon: +49 ... (optional) -->
                </p>

                <hr class="sep"/>

                <h3 style="margin:0 0 8px;">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                <p style="margin:0; color: var(--muted); line-height:1.7;">
                    Mohammad Taiba<br/>
                    Anschrift wie oben
                </p>

                <!-- Umsatzsteuer-ID – Falls vorhanden:
                                <hr class="sep">
                                <h3 style="margin:0 0 8px;">Umsatzsteuer-ID</h3>
                                <p style="margin:0; color: var(--muted); line-height:1.7;">
                                  DE...
                                </p>
                                -->
            </div>
        </div>
    `,
    styles: [
        `
      .page {
        padding: 6px 0;
      }

      .card-pad {
        padding: 18px;
      }

      hr.sep {
        border: none;
        border-top: 1px solid var(--border);
        margin: 14px 0;
      }

      .small {
        color: var(--muted);
        font-size: 13px;
      }
    `,
    ],
})
export class ImpressumPage {}
