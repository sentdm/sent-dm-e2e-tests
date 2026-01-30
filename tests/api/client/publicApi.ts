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

export type SendMessageRequest = {
  contactId?: string | null;
  phoneNumber?: string | null;
  templateId?: string | null;
  templateVariables?: Record<string, any> | null;
  channel?: string | null; // e.g. 'sms' or 'whatsapp'
};

export class PublicApi {
  constructor(private readonly http: HttpClient) {}

  healthcheck(): Promise<APIResponse> {
    return this.http.get("/healthcheck");
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

  getProfileInvitationDetails(customerId: string, profileId: string, token: string): Promise<APIResponse> {
    return this.http.get(
      `/v3/organizations/${customerId}/profiles/${profileId}/users/invitations/${token}`
    );
  }

  getOrganizationInvitationDetails(customerId: string, token: string): Promise<APIResponse> {
    return this.http.get(`/v3/organizations/${customerId}/users/invitations/${token}`);
  }

  getProfileContactById(profileId: string, contactId: string): Promise<APIResponse> {
    return this.http.get(`/v3/profiles/${profileId}/contacts/${contactId}`);
  }

  getProfileContacts(
    profileId: string,
    page = 1,
    pageSize = 20,
    searchTerm?: string | null,
    channel?: string | null
  ): Promise<APIResponse> {
    const params: Record<string, string | number | boolean> = { page, pageSize };
    if (searchTerm != null) params.searchTerm = searchTerm as any;
    if (channel != null) params.channel = channel as any;

    return this.http.get(`/v3/profiles/${profileId}/contacts`, {
      params
    });
  }

  getProfileTemplates(
    profileId: string,
    page = 1,
    pageSize = 20,
    searchTerm?: string | null,
    status?: string | null,
    category?: string | null
  ): Promise<APIResponse> {
    const params: Record<string, string | number | boolean> = { page, pageSize };
    if (searchTerm != null) params.searchTerm = searchTerm as any;
    if (status != null) params.status = status as any;
    if (category != null) params.category = category as any;

    return this.http.get(`/v3/profiles/${profileId}/templates`, {
      params
    });
  }

  sendProfileMessage(profileId: string, body: SendMessageRequest): Promise<APIResponse> {
    return this.http.post(`/v3/profiles/${profileId}/messages`, body);
  }

  deleteV2Template(id: string): Promise<APIResponse> {
    return this.http.delete(`/v2/templates/${id}`);
  }

  getV2TemplateById(id: string): Promise<APIResponse> {
    return this.http.get(`/v2/templates/${id}`);
  }

  getV2ContactById(id: string): Promise<APIResponse> {
    return this.http.get(`/v2/contacts/id`, { params: { id } });
  }

  getV2ContactByPhone(phoneNumber: string): Promise<APIResponse> {
    return this.http.get(`/v2/contacts/phone`, { params: { phoneNumber } });
  }
}
