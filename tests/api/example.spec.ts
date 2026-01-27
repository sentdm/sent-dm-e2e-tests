import { expect, test } from "@playwright/test";

test("GET /todos/1 returns expected shape", async ({ request, baseURL }) => {
  const response = await request.get(`${baseURL}/todos/1`);
  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  expect(body).toEqual(
    expect.objectContaining({
      id: 1,
      title: expect.any(String),
      completed: expect.any(Boolean)
    })
  );
});
