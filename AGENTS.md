# AGENTS.md

AI-Agent-Leitfaden fuer dieses Angular Portfolio-Projekt.

---

## Rollen der Doku-Dateien

- Verbindliche Regeln fuer Code-Generierung stehen in `.github/copilot-instructions.md`.
- Diese Datei (`AGENTS.md`) enthaelt Projektkontext, Workflows und Aufgabenablaeufe.
- Bei Regelkonflikten gilt immer `.github/copilot-instructions.md`.

---

## Architektur-Ueberblick

**Standalone Angular 21 SPA** mit file-based lazy-loaded routing.

- Zentrale Datenhaltung: `src/app/data/portfolio-data.ts` (Inhalte + Interfaces).
- Pages als Routes: `src/app/pages/*/*.page.ts`, lazy ueber `loadComponent()`.
- Shared UI: `src/app/shared/section.component.ts`.
- Kein NgModule, keine zusaetzlichen Services fuer statische Inhaltsseiten.

---

## Wichtige Quellpfade

- Routing: `src/app/app.routes.ts`
- App-Konfiguration: `src/app/app.config.ts`
- Navigation/Layout: `src/app/app.component.ts`, `src/app/app.component.html`
- Datenmodell und Inhalte: `src/app/data/portfolio-data.ts`
- Globale Styles: `src/styles.css`

---

## Entwickler-Workflows

### Lokal entwickeln

```bash
npm start
npm run lint
npm run build
npm run lint:fix
```

### Deployment-Kontext

- Zielplattform: cloudflare.
- SPA-Redirects in `src/_redirects` beachten.
- Asset- und Budget-Konfiguration in `angular.json` beachten.

---

## Quality Gates

- ESLint und Template-Accessibility muessen sauber bleiben.
- TypeScript-Checks und Production-Build muessen durchlaufen.
- Bei Routing-Aenderungen 404-Catch-all und Scroll-Verhalten mitpruefen.

---

## Typische Aenderungsablaeufe

### Neue Page ergaenzen

1. Dateien unter `src/app/pages/<name>/` anlegen (`.page.ts/.html/.css`).
2. Route in `src/app/app.routes.ts` lazy via `loadComponent()` ergaenzen.
3. Navigation in `src/app/app.component.html` aktualisieren.
4. Inhalte in `src/app/data/portfolio-data.ts` pflegen, nicht im Template hardcoden.

### Projektdaten erweitern

1. Neues Objekt in `WEBSITE_PROJECTS` oder `KI_PROJECTS` in `src/app/data/portfolio-data.ts` einfuegen.
2. Optionales Bild in `src/assets/projects/` ablegen und referenzieren.
3. Darstellung auf `src/app/pages/projects/projects.page.*` verifizieren.

### Styling anpassen

1. Globale Tokens in `src/styles.css` nutzen (`--bg`, `--panel`, `--text`, `--muted`, `--brand`, `--border`).
2. Komponentenstyles lokal halten (Page-CSS oder Component-Styles).
3. Mobile-first pruefen, dann Breakpoints mit `@media (min-width: ...)`.

## Aenderungsprinzipien fuer Agenten

- Kleine, fokussierte Diffs mit klarer Begruendung.
- Bestehende Patterns erweitern statt neue Architektur einzufuehren.
- Regelduplikate vermeiden; fuer Normen auf `.github/copilot-instructions.md` verweisen.

