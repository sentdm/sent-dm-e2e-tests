import { expect, test } from "./fixtures/apiFixtures";

test("healthcheck responds with 200", async ({ publicApi }) => {
  const response = await publicApi.healthcheck();
  expect(response.status()).toBe(200);
});

test("healthcheck responds with", async ({ publicApi }) => {
  const profile = await publicApi.getProfileUsers("profile-id");
  expect(profile.status()).toBe(200);

  const organization = await publicApi.getOrganizationUserById("org-id", "user-id");
  expect(organization.status()).toBe(200);
  console.log(organization);
});
