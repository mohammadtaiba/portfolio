import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
        <div class="page">
            <div class="card card-pad">
                <h1 style="margin:0 0 6px; font-size:24px;">404 - Seite nicht gefunden</h1>
                <p class="small" style="margin:0;">
                    Der Link stimmt nicht oder die Seite wurde verschoben.
                </p>
                <div class="actions" style="margin-top: 12px;">
                    <a class="btn primary" routerLink="/">Zur Startseite</a>
                    <a class="btn" routerLink="/projects">Projekte</a>
                </div>
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

            .small {
                color: var(--muted);
                font-size: 13px;
            }

            .actions {
                margin-top: 14px;
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
            }
        `,
    ],
})
export class NotFoundPage {}
