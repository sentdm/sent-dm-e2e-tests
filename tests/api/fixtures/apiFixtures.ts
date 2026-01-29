import { test as base } from "@playwright/test";
import { HttpClient } from "../client/httpClient";
import { InternalApi } from "../client/internalApi";
import { PublicApi } from "../client/publicApi";
import { getInternalApiEnv, getPublicApiEnv } from "../helpers/apiEnv";

type Fixtures = {
  publicApi: PublicApi;
  internalApi: InternalApi;
};

export const test = base.extend<Fixtures>({
  publicApi: async ({ request, baseURL }, use) => {
    const env = getPublicApiEnv(baseURL);
    const client = new HttpClient(request, {
      baseURL: env.baseURL,
      defaultHeaders: env.headers
    });
    await use(new PublicApi(client));
  },
  internalApi: async ({ request }, use) => {
    const env = getInternalApiEnv();
    const client = new HttpClient(request, {
      baseURL: env.baseURL,
      defaultHeaders: env.headers
    });
    await use(new InternalApi(client));
  }
});

export { expect } from "@playwright/test";
