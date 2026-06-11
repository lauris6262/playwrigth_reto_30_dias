# Playwright

Proyecto sencillo de automatización de pruebas end-to-end con
[Playwright](https://playwright.dev/).

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
npx playwright install
```

## Ejecutar las pruebas

```bash
npx playwright test
```

Para ejecutar las pruebas con interfaz gráfica:

```bash
npx playwright test --ui
```

Para consultar el reporte de la última ejecución:

```bash
npx playwright show-report
```

## Estructura básica

```text
tests/                  Pruebas automatizadas
playwright.config.js    Configuración de Playwright

setup
```
