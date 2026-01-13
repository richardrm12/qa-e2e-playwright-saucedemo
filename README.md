[![CI](https://github.com/richardrm12/qa-e2e-playwright-saucedemo/actions/workflows/ci.yml/badge.svg)](https://github.com/richardrm12/qa-e2e-playwright-saucedemo/actions/workflows/ci.yml)
# QA E2E Playwright - SauceDemo

Automatización E2E con Playwright + TypeScript usando Page Object Model (POM) y reportes Allure contra https://www.saucedemo.com.

## Requisitos
- Node.js 18+ (recomendado 20)

## Instalación
```bash
npm install
npx playwright install
```

## Ejecutar pruebas
```bash
npm test
```

## UI mode (exploración)
```bash
npm run test:ui
```

## Allure report
```bash
npm run allure:generate
npm run allure:open
```

## Estructura
- src/pages: Page Objects
- src/data: Datos de prueba
- tests/e2e: Casos E2E
- playwright.config.ts: Configuración (baseURL, reporter, proyectos)

## CI
- Workflow en .github/workflows/ci.yml ejecuta pruebas y sube `allure-results` como artefacto.

