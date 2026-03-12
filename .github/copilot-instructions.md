# Copilot Instructions fuer dieses Projekt

Diese Datei ist die verbindliche Source of Truth fuer Code-Generierung.
Architektur-, Workflow- und Betriebsdetails stehen in `AGENTS.md`.

---

## Ziel

- Erzeuge kleine, praezise Aenderungen fuer eine Angular 21 Standalone SPA.
- Erweitere bestehende Patterns statt neue Architekturen einzufuehren.
- Halte Dateistruktur, Naming und Stil konsistent.

---

## Prioritaet

- Diese Regeln haben Vorrang fuer Copilot-Vorschlaege in diesem Repository.
- Bei Konflikten mit allgemeinen Vorschlaegen gilt diese Datei.

---

## MUSS-Regeln

1. Keine harten Inhaltsdaten in Templates oder Components.
    - Inhalte immer aus `src/app/data/portfolio-data.ts` importieren.
2. Neue Seiten immer als standalone Page anlegen.
    - Dateinamen: `my-page.page.ts`, `my-page.page.html`, `my-page.page.css`.
3. Neue Routen immer lazy laden.
    - In `src/app/app.routes.ts` via `loadComponent(() => import(...).then(...))`.
4. Template-Control-Flow nur mit neuer Angular-Syntax.
    - `@if`, `@for` statt `*ngIf`, `*ngFor`.
5. Selector-Konventionen strikt einhalten.
    - Komponenten-Selektoren in kebab-case mit Prefix `app-`.
6. Styling in CSS halten.
    - Kein SCSS/SASS einfuehren; vorhandene Variablen in `src/styles.css` nutzen.

---

## Daten und Inhalte

- Source of truth fuer Portfolio-Inhalte: `src/app/data/portfolio-data.ts`.
- Bestehende Interfaces erweitern: `Project`, `Book`, `SkillGroup`, `FocusItem`.
- Neue Projekte in `WEBSITE_PROJECTS` oder `KI_PROJECTS` einfuegen.
- Profilinhalte in `PROFILE` pflegen.
- Projekt-Assets in `src/assets/projects/` ablegen und im Datenobjekt referenzieren.

---

## Component-Pattern

- Pages als standalone Components mit expliziten `imports`.
- Nur benoetigte Angular-Imports einbinden.
- Daten als readonly/public Properties aus `portfolio-data.ts` exponieren.
- Keine neuen Services fuer rein statische Inhaltsdarstellung einfuehren.

---

## Guardrails fuer bestehendes Verhalten

- `app.config.ts` respektieren: In-Memory-Scrolling nicht regressiv aendern.
- Mobile-Menue-Verhalten in `app.component.ts` nicht regressiv aendern.
- Catch-all `**` Route fuer `NotFoundPage` erhalten.

---

## Definition of Done fuer Vorschlaege

- Architektur bleibt standalone + lazy route.
- Inhaltsaenderungen liegen in `src/app/data/portfolio-data.ts`.
- `@if`/`@for` statt alter Structural Directives verwendet.
- Selector, Dateinamen und Imports konventionskonform.
- Linting-/Build-Annahmen passen zu vorhandenen Scripts.

