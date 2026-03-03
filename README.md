# Portfolio (Angular)

[![Code Quality Checks](https://github.com/moham/portfolio/actions/workflows/code-quality.yml/badge.svg)](https://github.com/moham/portfolio/actions/workflows/code-quality.yml)
[![Format Check](https://github.com/moham/portfolio/actions/workflows/auto-format.yml/badge.svg)](https://github.com/moham/portfolio/actions/workflows/auto-format.yml)

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

### Formatting

```bash
# Code formatieren
npm run format

# Format check (ohne Änderungen)
npm run format:check
```

### CI/CD

- ✅ Automatische Code Quality Checks bei Push & PR
- ✅ ESLint & Prettier Integration
- ✅ Build Tests auf Node 18 & 20
- ✅ TypeScript Compilation Checks
- ✅ Dependency Security Audits
- ✅ Dependabot für automatische Updates
