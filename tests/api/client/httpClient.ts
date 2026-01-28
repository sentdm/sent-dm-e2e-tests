import type { APIRequestContext, APIResponse } from "@playwright/test";

export type RequestOptions = {
  headers?: Record<string, string>;
  params?: Record<string, string | number | boolean>;
};

export class HttpClient {
  private readonly request: APIRequestContext;
  private readonly baseURL: string;
  private readonly defaultHeaders: Record<string, string>;

  constructor(
    request: APIRequestContext,
    options: { baseURL: string; defaultHeaders?: Record<string, string> }
  ) {
    this.request = request;
    this.baseURL = options.baseURL.replace(/\/+$/, "");
    this.defaultHeaders = options.defaultHeaders ?? {};
  }

  async get(path: string, options: RequestOptions = {}): Promise<APIResponse> {
    return this.request.get(this.toUrl(path), {
      headers: this.mergeHeaders(options.headers),
      params: options.params
    });
  }

  async post<TBody = unknown>(
    path: string,
    body: TBody,
    options: RequestOptions = {}
  ): Promise<APIResponse> {
    return this.request.post(this.toUrl(path), {
      headers: this.mergeHeaders(options.headers),
      params: options.params,
      data: body
    });
  }

  async put<TBody = unknown>(
    path: string,
    body: TBody,
    options: RequestOptions = {}
  ): Promise<APIResponse> {
    return this.request.put(this.toUrl(path), {
      headers: this.mergeHeaders(options.headers),
      params: options.params,
      data: body
    });
  }

  async delete(path: string, options: RequestOptions = {}): Promise<APIResponse> {
    return this.request.delete(this.toUrl(path), {
      headers: this.mergeHeaders(options.headers),
      params: options.params
    });
  }

  private toUrl(path: string): string {
    if (path.startsWith("http://") || path.startsWith("https://")) {
      return path;
    }
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return `${this.baseURL}${normalized}`;
  }

  private mergeHeaders(overrides?: Record<string, string>): Record<string, string> {
    return {
      ...this.defaultHeaders,
      ...overrides
    };
  }
}
