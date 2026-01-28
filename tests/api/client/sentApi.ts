import type { APIResponse } from "@playwright/test";
import { HttpClient } from "./httpClient";

export type InviteUserRequest = {
  email: string;
  name?: string | null;
  role?: string | null;
  invitedBy?: string | null;
};

export type UpdateUserRoleRequest = {
  role: string;
};

export class SentApi {
  constructor(private readonly http: HttpClient) {}

  healthcheck(): Promise<APIResponse> {
    return this.http.get("/healthcheck");
  }

  readiness(): Promise<APIResponse> {
    return this.http.get("/health/ready");
  }

  liveness(): Promise<APIResponse> {
    return this.http.get("/health/live");
  }

  getProfileUsers(profileId: string, page = 1, pageSize = 50): Promise<APIResponse> {
    return this.http.get(`/v3/profiles/${profileId}/users`, {
      params: { page, pageSize }
    });
  }

  getProfileUserById(profileId: string, userId: string): Promise<APIResponse> {
    return this.http.get(`/v3/profiles/${profileId}/users/${userId}`);
  }

  inviteProfileUser(profileId: string, body: InviteUserRequest): Promise<APIResponse> {
    return this.http.post(`/v3/profiles/${profileId}/users/invite`, body);
  }

  updateProfileUserRole(
    profileId: string,
    userId: string,
    body: UpdateUserRoleRequest
  ): Promise<APIResponse> {
    return this.http.put(`/v3/profiles/${profileId}/users/${userId}/role`, body);
  }

  deleteProfileUser(profileId: string, userId: string): Promise<APIResponse> {
    return this.http.delete(`/v3/profiles/${profileId}/users/${userId}`);
  }

  getOrganizationUsers(orgId: string, page = 1, pageSize = 50): Promise<APIResponse> {
    return this.http.get(`/v3/organizations/${orgId}/users`, {
      params: { page, pageSize }
    });
  }

  getOrganizationUserById(orgId: string, userId: string): Promise<APIResponse> {
    return this.http.get(`/v3/organizations/${orgId}/users/${userId}`);
  }

  inviteOrganizationUser(orgId: string, body: InviteUserRequest): Promise<APIResponse> {
    return this.http.post(`/v3/organizations/${orgId}/users/invite`, body);
  }

  updateOrganizationUserRole(
    orgId: string,
    userId: string,
    body: UpdateUserRoleRequest
  ): Promise<APIResponse> {
    return this.http.put(`/v3/organizations/${orgId}/users/${userId}/role`, body);
  }

  deleteOrganizationUser(orgId: string, userId: string): Promise<APIResponse> {
    return this.http.delete(`/v3/organizations/${orgId}/users/${userId}`);
  }
}
