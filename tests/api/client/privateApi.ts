import type { APIResponse } from "@playwright/test";
import { HttpClient } from "./httpClient";

export type CreateWhatsappPricingRequest = {
  regionCode: string;
  regionName?: string;
  marketingUsd: number;
  serviceUsd: number;
  utilityUsd: number;
  authUsd: number;
};

export type UpdateWhatsappPricingRequest = CreateWhatsappPricingRequest;

export type CreateWebhookRequest = {
  customerId: string;
  displayName: string;
  endpointUrl: string;
  eventTypes: string[];
  retryCount?: number;
  timeoutSeconds?: number;
};

export type UpdateWebhookRequest = {
  displayName?: string;
  endpointUrl?: string;
  eventTypes?: string[];
  retryCount?: number;
  timeoutSeconds?: number;
};

export class PrivateApi {
  constructor(private readonly http: HttpClient) {}

  listWhatsappPricing(
    page = 1,
    pageSize = 20,
    searchTerm?: string
  ): Promise<APIResponse> {
    const params: Record<string, string | number> = { page, pageSize };
    if (searchTerm) {
      params.searchTerm = searchTerm;
    }
    return this.http.get("/whatsapp-pricing", { params });
  }

  getWhatsappPricingById(id: string): Promise<APIResponse> {
    return this.http.get(`/whatsapp-pricing/${id}`);
  }

  getWhatsappPricingByRegion(
    regionCode: string,
    fallbackToDefault = true
  ): Promise<APIResponse> {
    return this.http.get(`/whatsapp-pricing/region/${regionCode}`, {
      params: { fallbackToDefault }
    });
  }

  createWhatsappPricing(body: CreateWhatsappPricingRequest): Promise<APIResponse> {
    return this.http.post("/whatsapp-pricing", body);
  }

  updateWhatsappPricing(
    id: string,
    body: UpdateWhatsappPricingRequest
  ): Promise<APIResponse> {
    return this.http.put(`/whatsapp-pricing/${id}`, body);
  }

  deleteWhatsappPricing(id: string): Promise<APIResponse> {
    return this.http.delete(`/whatsapp-pricing/${id}`);
  }

  getWebhookEventTypes(): Promise<APIResponse> {
    return this.http.get("/webhooks/event-types");
  }

  createWebhook(body: CreateWebhookRequest): Promise<APIResponse> {
    return this.http.post("/webhooks", body);
  }

  updateWebhook(
    customerId: string,
    id: string,
    body: UpdateWebhookRequest
  ): Promise<APIResponse> {
    return this.http.put(`/webhooks/${customerId}/${id}`, body);
  }

  deleteWebhook(customerId: string, id: string): Promise<APIResponse> {
    return this.http.delete(`/webhooks/${customerId}/${id}`);
  }
}
