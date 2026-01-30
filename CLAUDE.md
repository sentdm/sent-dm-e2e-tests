# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Playwright-based E2E testing suite for the Sent.dm platform, supporting both UI and API testing. The project uses TypeScript and is structured to test multiple API endpoints (public and internal) with environment-specific configurations.

## Test Commands

```bash
# Run all tests
npm test

# Run only UI tests
npm run test:ui

# Run only API tests
npm run test:api

# Run tests in headed mode (with browser visible)
npm run test:headed

# View test report
npm run report
```

## Running Individual Tests

```bash
# Run a specific test file
npx playwright test tests/api/example.spec.ts

# Run tests matching a pattern
npx playwright test --grep "healthcheck"

# Run tests in debug mode
npx playwright test --debug

# Run a specific project
npx playwright test --project=api
npx playwright test --project=ui-chromium
```

## Architecture

### Test Structure

- **tests/api/** - API tests using custom HTTP client wrappers
  - **client/** - HTTP client and API wrappers
    - `httpClient.ts` - Base HTTP client wrapping Playwright's APIRequestContext
    - `publicApi.ts` - Public API endpoints (v3 API with x-api-key authentication)
    - `internalApi.ts` - Internal/private API endpoints (admin-level operations)
  - **fixtures/** - Playwright fixtures for dependency injection
    - `apiFixtures.ts` - Extends Playwright test with `publicApi` and `internalApi` fixtures
  - **helpers/** - Test utilities
    - `apiEnv.ts` - Environment configuration for API testing

- **tests/ui/** - UI tests using standard Playwright browser automation

- **tests/helpers/** - Shared utilities
  - `loadEnv.ts` - Custom .env file loader (runs before playwright.config.ts)

### API Client Pattern

The codebase uses a layered architecture for API testing:

1. **HttpClient** - Low-level HTTP operations (GET, POST, PUT, DELETE, PATCH)
   - Wraps Playwright's `APIRequestContext`
   - Handles URL normalization, header merging, and params
   - Constructor takes `baseURL` and `defaultHeaders`

2. **PublicApi / InternalApi** - High-level API methods
   - Built on top of HttpClient
   - Each method corresponds to a specific API endpoint
   - Type-safe request/response handling with TypeScript types

3. **Fixtures** - Playwright test fixtures
   - `publicApi` fixture: automatically configured for public API with authentication headers
   - `internalApi` fixture: automatically configured for internal API with authentication headers
   - Both use environment configuration from `apiEnv.ts`

### Environment Configuration

The project loads environment variables in this order (higher priority first):

1. System environment variables
2. `.env.{TEST_ENV}.local` (e.g., `.env.dev.local`)
3. `.env.local`
4. `.env.{TEST_ENV}` (e.g., `.env.dev`)
5. `.env`

**Key environment variables:**

- `TEST_ENV` or `NODE_ENV` - Determines which .env file to load (defaults to "dev")
- `BASE_URL` - Base URL for UI tests (defaults to https://app-dev.sent.dm)
- `PUBLIC_API_BASE_URL` or `API_BASE_URL` - Public API base URL
- `INTERNAL_API_BASE_URL` - Internal API base URL
- `PUBLIC_API_KEY` or `API_KEY` - API key for public API (sets x-api-key header)
- `PUBLIC_SENDER_ID` or `SENDER_ID` - Sender ID for public API (sets x-sender-id header)
- `INTERNAL_API_KEY` - API key for internal API
- `INTERNAL_SENDER_ID` - Sender ID for internal API

### Playwright Configuration

Two test projects are configured:

- **ui-chromium** - UI tests running in Chrome
- **api** - API tests (no browser, uses request context only)

The configuration loads `.env` files via `import "./tests/helpers/loadEnv"` at the top of `playwright.config.ts` to ensure environment variables are available before config evaluation.

## Adding New API Endpoints

When adding new API endpoints:

1. Add request/response types to `publicApi.ts` or `internalApi.ts`
2. Add method to the appropriate API class following the existing pattern:
   ```typescript
   methodName(params...): Promise<APIResponse> {
     return this.http.get/post/put/delete/patch(path, body, options);
   }
   ```
3. For InternalApi methods with query params, use `this.buildParams()` to filter out undefined values
4. Write tests in `tests/api/` using the fixtures:
   ```typescript
   import { test, expect } from "./fixtures/apiFixtures";

   test("test name", async ({ publicApi, internalApi }) => {
     const response = await publicApi.methodName();
     expect(response.status()).toBe(200);
   });
   ```

## Type Definitions

The InternalApi contains extensive type definitions for request bodies. Many are currently typed as `AnyObject` placeholders and should be expanded with proper types as the API evolves. When adding types:

- Use optional properties (`?:`) for fields that may be omitted
- Use specific types (`string`, `number`, `boolean`) instead of `any` where possible
- Group related types together with comments
