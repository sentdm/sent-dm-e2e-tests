import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.BASE_URL || "https://example.com";
const apiBaseURL = process.env.API_BASE_URL || "https://jsonplaceholder.typicode.com";

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
