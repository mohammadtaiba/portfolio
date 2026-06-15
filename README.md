# Portfolio

[![Code Quality Checks](https://github.com/mohammadtaiba/portfolio/actions/workflows/code-quality.yml/badge.svg)](https://github.com/mohammadtaiba/portfolio/actions/workflows/code-quality.yml)

Persönliche Portfolio-Webseite zur strukturierten Präsentation meiner Projekte, technischen Schwerpunkte und Kontaktmöglichkeiten im Bereich Softwareentwicklung.

## Überblick

Dieses Repository enthält den Quellcode meines Portfolio-Projekts. Die Anwendung ist als moderne Angular Single Page Application umgesetzt und legt den Fokus auf eine klare Projektübersicht, eine responsive Benutzeroberfläche und eine saubere Codebasis.

## Funktionen

- Präsentation ausgewählter Softwareprojekte
- Übersicht technischer Schwerpunkte und Fähigkeiten
- Responsive Darstellung für Desktop, Tablet und Smartphone
- Strukturierte Angular-Komponentenarchitektur
- Automatisierte Code-Quality-Prüfungen über GitHub Actions

## Tech Stack

- Angular 21
- TypeScript
- HTML
- CSS
- ESLint / angular-eslint
- GitHub Actions

## Voraussetzungen

- Node.js LTS
- npm

Installation unter Windows:

```bash
winget install OpenJS.NodeJS.LTS
```

## Installation

Repository klonen:

```bash
git clone https://github.com/mohammadtaiba/portfolio.git
cd portfolio
```

Abhängigkeiten installieren:

```bash
npm install
```

## Entwicklung

Dev-Server starten:

```bash
npm start
```

Die Anwendung ist anschließend unter folgender Adresse erreichbar:

```text
http://localhost:4200
```

## Build

Production-Build erstellen:

```bash
npm run build
```

Der Build wird im Ordner `dist/` erzeugt.

## NPM-Skripte

| Befehl | Beschreibung |
| --- | --- |
| `npm start` | Startet den lokalen Angular-Dev-Server |
| `npm run build` | Erstellt einen Production-Build |
| `npm run lint` | Führt ESLint-Prüfungen aus |
| `npm run lint:fix` | Behebt automatisch behebbare ESLint-Probleme |
| `npm test` | Startet die Tests |

## Code Quality & CI

Bei Pushes und Pull Requests auf `main` werden automatische Prüfungen ausgeführt:

- Installation der Abhängigkeiten mit `npm ci`
- ESLint-Prüfung
- Angular Production-Build
- TypeScript-Compilation-Check mit `tsc --noEmit`
- Dependency Security Check mit `npm audit`
- Prüfung auf veraltete Pakete mit `npm outdated`
- Upload des Build-Outputs als GitHub-Actions-Artefakt

## Projektstatus

Das Portfolio wird fortlaufend weiterentwickelt und an neue Projekte, Inhalte und technische Verbesserungen angepasst.

## License

Copyright © 2026 Mohammad Taiba. All rights reserved.

This repository is publicly available for portfolio and review purposes only.
No permission is granted to use, copy, modify, distribute, sublicense, or sell
any part of this project without prior written permission from the author.
