# sent.dm E2E Tests

End-to-end tests for the sent.dm application using Playwright.

## Pre-requisites

- Node.js 24+
- pnpm package manager
- Infisical CLI: `brew install infisical/get-cli/infisical`

## Environment Variables

### Login to Sent.dm Secrets

```bash
infisical login --domain https://secrets.sent.dm
```

Follow the CLI instructions to authenticate with the secrets manager.

### Get Environment Variables

```bash
infisical export --env=dev > .env
```

This exports all required environment variables to your `.env` file.

## Running Tests

```bash
pnpm test
```
