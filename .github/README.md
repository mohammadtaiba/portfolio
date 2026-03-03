# .github Ordner

Dieser Ordner enthält GitHub-spezifische Konfigurationen und Automatisierungen für das Portfolio-Projekt.

## 📂 Struktur

### Workflows (`workflows/`)

#### 1. **code-quality.yml**

Führt Code Quality Checks bei jedem Push und Pull Request aus:

- ✅ ESLint Linting
- ✅ TypeScript Compilation Check
- ✅ Build Test auf Node 20
- ✅ Dependency Security Audit

#### 2. **auto-format.yml**

Zusätzlicher Pull-Request-Check:

- Führt ESLint für PRs aus

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
```

### GitHub Actions

Die Workflows werden automatisch ausgelöst bei:

- Push auf `main`, `master`, oder `develop`
- Pull Requests zu diesen Branches

## 🔧 Konfiguration

### ESLint

Konfiguration: `eslint.config.js` im Root
