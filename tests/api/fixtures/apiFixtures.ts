import { test as base } from "@playwright/test";
import { HttpClient } from "../client/httpClient";
import { PrivateApi } from "../client/privateApi";
import { SentApi } from "../client/sentApi";
import { getPrivateApiEnv, getPublicApiEnv } from "../helpers/apiEnv";

type Fixtures = {
  publicApi: SentApi;
  privateApi: PrivateApi;
};

export const test = base.extend<Fixtures>({
  publicApi: async ({ request, baseURL }, use) => {
    const env = getPublicApiEnv(baseURL);
    const client = new HttpClient(request, {
      baseURL: env.baseURL,
      defaultHeaders: env.headers
    });
    await use(new SentApi(client));
  },
  privateApi: async ({ request }, use) => {
    const env = getPrivateApiEnv();
    const client = new HttpClient(request, {
      baseURL: env.baseURL,
      defaultHeaders: env.headers
    });
    await use(new PrivateApi(client));
  }
});

export { expect } from "@playwright/test";
