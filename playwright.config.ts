import "./tests/helpers/loadEnv"; // load .env files into process.env before config uses them
import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.BASE_URL || "https://app-dev.sent.dm";
const apiBaseURL =
  process.env.PUBLIC_API_BASE_URL ||
  process.env.API_BASE_URL ||
  "https://api-dev.sent.dm";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  expect: {
    timeout: 5_000
  },
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: [["html", { open: "never" }]],
  use: {
    baseURL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },
  projects: [
    {
      name: "ui-chromium",
      use: { ...devices["Desktop Chrome"] }
    },
    {
      name: "api",
      testDir: "./tests/api",
      use: {
        baseURL: apiBaseURL
      }
    }
  ]
});
