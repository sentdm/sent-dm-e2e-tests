import { expect, test } from "./fixtures/apiFixtures";

test("healthcheck responds with 200", async ({ publicApi }) => {
  const response = await publicApi.healthcheck();
  expect(response.status()).toBe(200);
});

test("healthcheck responds with", async ({ privateApi }) => {
  const response = await privateApi.listWhatsappPricing();
  expect(response.status()).toBe(200);
});
