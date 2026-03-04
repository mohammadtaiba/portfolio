# Portfolio (Angular)

[![Code Quality Checks](https://github.com/moham/portfolio/actions/workflows/code-quality.yml/badge.svg)](https://github.com/moham/portfolio/actions/workflows/code-quality.yml)

## Was ist das?

Dies ist das persönliche Portfolio von **Mohammad Taiba**, einem Full-Stack-Entwickler aus Erfurt, Deutschland.

Die Webanwendung wurde mit **Angular** als Single-Page Application (SPA) entwickelt und präsentiert:

- **Projekte** – Eine Übersicht realisierter Webprojekte und Anwendungen (mit Suche und Tag-Filter)
- **Skills** – Technologien und Fähigkeiten
- **Bücher** – Gelesene Fachliteratur mit Learnings
- **CV** – Lebenslauf
- **Kontakt** – Kontaktmöglichkeiten

Die Anwendung ist unter [https://mohammad-taiba.netlify.app/](https://mohammad-taiba.netlify.app/) live erreichbar.

## Voraussetzungen

1. Node.js (LTS) installieren:

```bash
winget install OpenJS.NodeJS.LTS
```

2. Abhängigkeiten installieren:

```bash
npm install
```

## Dev-Server starten

```bash
npm start
```

Öffnen: http://localhost:4200

## Build (Production)

```bash
npm run build
```

Output: `dist/`

## 🔍 Code Quality

### Linting

```bash
# Code linting
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

### CI/CD

- ✅ Automatische Code Quality Checks bei Push & PR
- ✅ ESLint Integration
- ✅ Build Tests auf Node 20
- ✅ TypeScript Compilation Checks
- ✅ Dependency Security Audits
- ✅ Dependabot für automatische Updates
