# .github Ordner

Dieser Ordner enthält GitHub-spezifische Konfigurationen und Automatisierungen für das Portfolio-Projekt.

## 📂 Struktur

### Workflows (`workflows/`)

#### 1. **code-quality.yml**

Führt Code Quality Checks bei jedem Push und Pull Request aus:

- ✅ Prettier Code Formatting Check
- ✅ ESLint Linting
- ✅ TypeScript Compilation Check
- ✅ Build Tests auf Node 18 & 20
- ✅ Dependency Security Audit

#### 2. **auto-format.yml**

Automatischer Code Formatter für Pull Requests:

- Prüft Code Formatting
- Formatiert Code automatisch mit Prettier
- Committed und pusht Änderungen

### Issue Templates (`ISSUE_TEMPLATE/`)

- **bug_report.yml**: Template für Bug Reports
- **feature_request.yml**: Template für Feature Requests
- **config.yml**: Issue Template Konfiguration

### Andere Dateien

- **dependabot.yml**: Automatische Dependency Updates (wöchentlich für npm, monatlich für GitHub Actions)
- **pull_request_template.md**: Standardvorlage für Pull Requests

## 🚀 Verwendung

### Lokale Code Quality Checks

```bash
# Linting ausführen
npm run lint

# Linting mit Auto-Fix
npm run lint:fix

# Code formatieren
npm run format

# Format Check (ohne Änderungen)
npm run format:check
```

### GitHub Actions

Die Workflows werden automatisch ausgelöst bei:

- Push auf `main`, `master`, oder `develop`
- Pull Requests zu diesen Branches

## 🔧 Konfiguration

### ESLint

Konfiguration: `eslint.config.js` im Root

### Prettier

Konfiguration: `.prettierrc.json` im Root

