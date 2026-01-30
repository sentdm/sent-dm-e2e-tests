import type { APIResponse } from "@playwright/test";
import { HttpClient } from "./httpClient";

// Helper type for any object
type AnyObject = Record<string, any>;

// Missing type definitions
export type ImportTemplateFromMetaRequest = AnyObject;
export type UpdateSampleTemplateRequest = AnyObject;
export type SendMessageByContactRequest = AnyObject;
export type SendMessageByNumberRequest = AnyObject;
export type DeleteCustomerRequest = AnyObject;
export type InviteUserToProfileRequest = AnyObject;

export type AcceptInvitationRequest = {
  invitationToken?: string;
  name?: string;
};

export type AddCustomerApiKeyRequest = {
  customerId?: string;
  name?: string;
};

export type AppendConversionFlowAdditionalDataRequest = {
  customerId?: string;
  status?: string;
  additionalData?: any;
};

export type AssociateNumberRequest = {
  phoneNumberId?: string;
  customerId?: string;
  allowNumberChangeDuringOnboarding?: boolean;
  assignToMessagingProfile?: boolean;
  registerInWaba?: boolean;
};

export type ByJustCustomerIdRequest = {
  customerId?: string;
};

export type ChangeDefaultChannelRequest = {
  contactId?: string;
  defaultChannel?: any;
};

export type CompleteKycFromSubmissionRequest = {
  businessName?: string;
  primaryUseCase?: string;
  expectedMessagingVolume?: string;
  contactPhone?: string;
};

export type CompleteOnboardingRequest = {
  customerId?: string;
  webHookUrl?: string;
};

export type CompleteSenderProfileRequest = {
  webHookUrl?: string;
};

export type ConvertSampleTemplateRequest = {
  sampleTemplateId?: string;
  customDisplayName?: string;
};

export type CreateCampaignRequest = {
  kycSubmissionFormId?: string;
  type: string;
  customerId: string;
  name: string;
  description: string;
  useCases?: any[];
  messageFlow?: string;
  privacyPolicyLink?: string;
  termsAndConditionsLink?: string;
  optinMessage?: string;
  optoutMessage?: string;
  helpMessage?: string;
  optinKeywords?: string;
  optoutKeywords?: string;
  helpKeywords?: string;
};

export type CreateCustomerConversionFlowRequest = {
  customerId?: string;
  status?: string;
  notes?: string;
  extraData?: any;
};

export type CreateKycFormRequest = {
  businessName?: string;
  contactName?: string;
  businessRole?: string;
  contactPhone?: string;
  contactEmail?: string;
  contactPhoneCountryCode?: string;
  userId?: string;
};

export type CreateNumberRequest = {
  phoneNumber?: string;
};

export type CreatePaymentRequest = {
  customerId?: string;
  amount?: number;
  transactionId?: string;
  description?: string;
  paymentMethod?: string;
  billingDetailsId?: string;
};

export type CreateProfileRequest = {
  name?: string;
  icon?: string;
  description?: string;
  shortName?: string;
  allowContactSharing?: boolean;
  allowTemplateSharing?: boolean;
  inheritContacts?: boolean;
  inheritTemplates?: boolean;
  inheritTcrBrand?: boolean;
  inheritTcrCampaign?: boolean;
  senderProfileBilling?: string;
};

export type CreateProfileUserRequest = {
  email?: string;
  name?: string;
  role?: string;
  invitedBy?: string;
};

export type CreateProvisionRequirementRequest = {
  countryCode: string;
  countryName: string;
  phonePrefix: string;
  requiredDocuments?: any[];
  providers: string[];
  monthlyCostUsd?: number;
  setupCostUsd?: number;
  isSupported?: boolean;
  notes?: string;
};

export type CreateUserRequest = {
  email?: string;
  name?: string;
  role?: string;
  invitedBy?: string;
};

export type CreateWebhookRequest = {
  customerId?: string;
  displayName?: string;
  endpointUrl?: string;
  eventTypes?: string[];
  retryCount?: number;
  timeoutSeconds?: number;
};

export type CreateWhatsappPricingRequest = {
  regionCode?: string;
  regionName?: string;
  marketingUsd?: number;
  serviceUsd?: number;
  utilityUsd?: number;
  authUsd?: number;
};

export type DissociateNumberRequest = {
  phoneNumberId?: string;
  removeFromMessagingProfile?: boolean;
  removeFromWhatsApp?: boolean;
};

export type EditCustomerApiKeyRequest = {
  customerId?: string;
  id?: string;
  name?: string;
};

export type InitializeBalanceRequest = {
  initialBalance?: number;
};

export type NotifyChannelRequest = {
  customerId: string;
  conversionStatus: string;
  channel: string;
  templateId: string;
};

export type NotifyEmailRequest = {
  customerId: string;
  conversionStatus: string;
  templateName: string;
  emailSubject?: string;
};

export type PartialUpdateRequest = {
  updates?: any;
};

export type PostCustomerPhoneNumbersRequest = {
  customerId?: string;
  phoneNumbers?: string[];
};

export type PostNewCustomerRequest = {
  name: string;
  email: string;
  customerTimezone?: string;
};

export type RefreshContactChannelsByPhoneRequest = {
  phoneNumber?: string;
  channelType?: any;
};

export type RefreshContactChannelsRequest = {
  contactId?: string;
  channelType?: any;
};

export type RegisterPhoneNumberRequest = {
  customerId: string;
  wabaId: string;
};

export type RejectInvitationRequest = {
  invitationToken?: string;
};

export type ReplaceCampaignsForKycRequest = {
  kycSubmissionFormId: string;
  expectedMessagingVolume: string;
  campaigns?: any[];
};

export type RequestVerificationCodeRequest = {
  customerId: string;
  phoneNumberId: string;
};

export type SampleTemplateCreate = {
  displayName: string;
  whatsappTemplateName: string;
  description?: string;
  groupName: string;
  category: string;
  language: string;
  definition: any;
  sortOrder?: number;
  isActive?: boolean;
};

export type SendQuickMessageRequest = {
  customerId: string;
  phoneNumber: string;
  templateVariables: any;
};

export type SubmitBrandRequest = {
  brandId?: string;
  customerId?: string;
  vertical?: any;
  brandRelationship?: any;
};

export type SubmitCampaignRequest = {
  campaignId?: string;
  customerId?: string;
};

export type TemplatesTwoCreate = {
  customerId: string;
  category?: string;
  language?: string;
  definition: any;
  creationSource?: string;
  submitForReview?: boolean;
};

export type TestWebhookRequest = {
  customerId?: string;
  eventType?: string;
};

export type ToggleWebhookStatusRequest = {
  customerId?: string;
  isActive?: boolean;
};

export type UpdateBalanceRequest = {
  amount?: number;
  description?: string;
  referenceId?: string;
};

export type UpdateCampaignRequest = {
  customerId?: string;
  name?: string;
  description?: string;
  messageFlow?: string;
  resellerId?: string;
  type?: string;
  useCases?: any[];
  privacyPolicyLink?: string;
  termsAndConditionsLink?: string;
  optinMessage?: string;
  optoutMessage?: string;
  helpMessage?: string;
  optinKeywords?: string;
  optoutKeywords?: string;
  helpKeywords?: string;
};

export type UpdateCustomerConversionFlowStatusRequest = {
  id?: string;
  status?: string;
  notes?: string;
};

export type UpdateDefaultChannelRequest = {
  defaultChannel?: string;
  definitiveDecision?: boolean;
};

export type UpdateInstantiatedPhoneRequest = {
  country?: string;
  numberType?: any;
  provider?: any;
};

export type UpdateProfileRequest = {
  updates?: any;
};

export type UpdateProfileUserRoleRequest = {
  role?: string;
};

export type UpdateProvisionRequirementRequest = {
  countryCode: string;
  countryName: string;
  phonePrefix: string;
  requiredDocuments?: any[];
  providers: string[];
  monthlyCostUsd?: number;
  setupCostUsd?: number;
  isSupported?: boolean;
  notes?: string;
};

export type UpdateUserRoleRequest = {
  role?: string;
};

export type UpdateWebhookRequest = {
  displayName?: string;
  endpointUrl?: string;
  eventTypes?: string[];
  retryCount?: number;
  timeoutSeconds?: number;
};

export type UpdateWhatsappPricingRequest = {
  regionCode?: string;
  regionName?: string;
  marketingUsd?: number;
  serviceUsd?: number;
  utilityUsd?: number;
  authUsd?: number;
};

export type WhatsAppSubscribeAppsRequest = {
  wabaId?: string;
};

export type UploadCampaignSupportingDocumentRequest = AnyObject;

export class InternalApi {
  constructor(private readonly http: HttpClient) {}

  /**
   * Helper to build params object, filtering out undefined values
   */
  private buildParams(params: Record<string, any>): Record<string, string | number | boolean> {
    return Object.entries(params).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, string | number | boolean>);
  }

  // ========================================
  // Transactions
  // ========================================

  /**
   * Get transaction by ID
   */
  getTransactionById(id: string): Promise<APIResponse> {
    return this.http.get(`/transactions/${id}`);
  }

  // ========================================
  // Templates
  // ========================================

  /**
   * Create a new message template (v2)
   */
  createTemplate(body: TemplatesTwoCreate): Promise<APIResponse> {
    return this.http.post(`/templates/v2`, body);
  }

  /**
   * Delete a template (v2)
   */
  deleteTemplate(customerId: string, id: string, deleteFromMeta?: boolean): Promise<APIResponse> {
    return this.http.delete(`/templates/v2/${customerId}/${id}`, { params: this.buildParams({ deleteFromMeta }) });
  }

  /**
   * Get a specific template by customer ID and template ID
   */
  getTemplateById(customerId: string, id: string): Promise<APIResponse> {
    return this.http.get(`/templates/v2/${customerId}/${id}`);
  }

  /**
   * Update an existing message template (v2)
   */
  updateTemplate(customerId: string, id: string, body: PartialUpdateRequest): Promise<APIResponse> {
    return this.http.put(`/templates/v2/${customerId}/${id}`, body);
  }

  /**
   * Get customer templates with search, filtering, and pagination
   */
  listTemplates(customerId: string, page: number, pageSize: number, searchTerm?: string, status?: string, category?: string): Promise<APIResponse> {
    return this.http.get(`/templates/v2/${customerId}`, { params: this.buildParams({ searchTerm, status, category, page, pageSize }) });
  }

  /**
   * Get WhatsApp Business Account templates
   */
  listWabaTemplates(customerId: string, category?: string, content?: string, language?: string, name?: string, nameOrContent?: string, qualityScore?: string, status?: string): Promise<APIResponse> {
    return this.http.get(`/templates/v2/${customerId}/waba-templates`, { params: this.buildParams({ category, content, language, name, nameOrContent, qualityScore, status }) });
  }

  /**
   * Import WhatsApp template from Meta
   */
  importTemplateFromMeta(customerId: string, body: ImportTemplateFromMetaRequest): Promise<APIResponse> {
    return this.http.post(`/templates/v2/${customerId}/import-from-meta`, body);
  }

  // ========================================
  // Sample-Templates
  // ========================================

  /**
   * Convert sample template to customer template format
   */
  convertSampleTemplate(body: ConvertSampleTemplateRequest): Promise<APIResponse> {
    return this.http.post(`/sample-templates/convert`, body);
  }

  /**
   * Create a new sample template
   */
  createSampleTemplate(body: SampleTemplateCreate): Promise<APIResponse> {
    return this.http.post(`/sample-templates`, body);
  }

  /**
   * Get sample templates with search, filtering, and pagination
   */
  listSampleTemplates(page: number, pageSize: number, searchTerm?: string, category?: string, language?: string, groupName?: string): Promise<APIResponse> {
    return this.http.get(`/sample-templates`, { params: this.buildParams({ searchTerm, category, language, groupName, page, pageSize }) });
  }

  /**
   * Delete a sample template
   */
  deleteSampleTemplate(id: string): Promise<APIResponse> {
    return this.http.delete(`/sample-templates/${id}`);
  }

  /**
   * Get a specific sample template by ID
   */
  getSampleTemplateById(id: string): Promise<APIResponse> {
    return this.http.get(`/sample-templates/${id}`);
  }

  /**
   * Update a sample template
   */
  updateSampleTemplate(id: string, body: UpdateSampleTemplateRequest): Promise<APIResponse> {
    return this.http.put(`/sample-templates/${id}`, body);
  }

  /**
   * Get available sample template groups
   */
  listSampleTemplateGroups(): Promise<APIResponse> {
    return this.http.get(`/sample-templates/groups`);
  }

  /**
   * Get sample templates by group name
   */
  listSampleTemplatesByGroup(groupName: string): Promise<APIResponse> {
    return this.http.get(`/sample-templates/group/${groupName}`);
  }

  // ========================================
  // Organizations
  // ========================================

  /**
   * Get organization by ID
   */
  getOrganizationById(orgId: string): Promise<APIResponse> {
    return this.http.get(`/organizations/${orgId}`);
  }

  /**
   * Get paginated list of payments owned by an organization
   */
  listOrganizationPayments(orgId: string, page: number, pageSize: number, paymentStatus?: string): Promise<APIResponse> {
    return this.http.get(`/organizations/${orgId}/payments`, { params: this.buildParams({ paymentStatus, page, pageSize }) });
  }

  /**
   * Get organizations by email
   */
  listOrganizations(email?: string): Promise<APIResponse> {
    return this.http.get(`/organizations`, { params: this.buildParams({ email }) });
  }

  /**
   * Accept user invitation for organization
   */
  acceptOrganizationInvitation(orgId: string, body: AcceptInvitationRequest): Promise<APIResponse> {
    return this.http.post(`/organizations/${orgId}/users/invitations/accept`, body);
  }

  /**
   * Create/invite user to organization or profile
   */
  createOrganizationUser(customerId: string, body: CreateUserRequest): Promise<APIResponse> {
    return this.http.post(`/organizations/${customerId}/users`, body);
  }

  /**
   * Get users in organization or profile
   */
  listOrganizationUsers(customerId: string, page: number, pageSize: number): Promise<APIResponse> {
    return this.http.get(`/organizations/${customerId}/users`, { params: this.buildParams({ page, pageSize }) });
  }

  /**
   * Delete/remove user
   */
  deleteOrganizationUser(customerId: string, userId: string): Promise<APIResponse> {
    return this.http.delete(`/organizations/${customerId}/users/${userId}`);
  }

  /**
   * Get user by ID
   */
  getOrganizationUserById(customerId: string, userId: string): Promise<APIResponse> {
    return this.http.get(`/organizations/${customerId}/users/${userId}`);
  }

  /**
   * Update user role
   */
  updateOrganizationUser(customerId: string, userId: string, body: UpdateUserRoleRequest): Promise<APIResponse> {
    return this.http.put(`/organizations/${customerId}/users/${userId}`, body);
  }

  /**
   * Get invitation details by token
   */
  getOrganizationInvitation(customerId: string, token: string): Promise<APIResponse> {
    return this.http.get(`/organizations/${customerId}/users/invitations/${token}`);
  }

  /**
   * Invite user to organization
   */
  inviteOrganizationUser(customerId: string, body: CreateUserRequest): Promise<APIResponse> {
    return this.http.post(`/organizations/${customerId}/users/invite`, body);
  }

  /**
   * Reject user invitation for organization
   */
  rejectOrganizationInvitation(orgId: string, body: RejectInvitationRequest): Promise<APIResponse> {
    return this.http.post(`/organizations/${orgId}/users/invitations/reject`, body);
  }

  /**
   * Get all templates for an organization
   */
  listOrganizationTemplates(orgId: string, page: number, pageSize: number, searchTerm?: string, status?: string, category?: string): Promise<APIResponse> {
    return this.http.get(`/organizations/${orgId}/templates`, { params: this.buildParams({ page, pageSize, searchTerm, status, category }) });
  }

  /**
   * Complete sender profile setup
   */
  completeProfile(organizationId: string, profileId: string, body: CompleteSenderProfileRequest): Promise<APIResponse> {
    return this.http.post(`/organizations/${organizationId}/profiles/${profileId}/complete`, body);
  }

  /**
   * Create a new sender profile
   */
  createProfile(orgId: string, body: CreateProfileRequest): Promise<APIResponse> {
    return this.http.post(`/organizations/${orgId}/profiles`, body);
  }

  /**
   * Get all sender profiles for an organization
   */
  listProfiles(orgId: string): Promise<APIResponse> {
    return this.http.get(`/organizations/${orgId}/profiles`);
  }

  /**
   * Delete sender profile
   */
  deleteProfile(orgId: string, profileId: string): Promise<APIResponse> {
    return this.http.delete(`/organizations/${orgId}/profiles/${profileId}`);
  }

  /**
   * Get sender profile by ID
   */
  getProfileById(orgId: string, profileId: string): Promise<APIResponse> {
    return this.http.get(`/organizations/${orgId}/profiles/${profileId}`);
  }

  /**
   * Update sender profile
   */
  updateProfile(orgId: string, profileId: string, body: UpdateProfileRequest): Promise<APIResponse> {
    return this.http.put(`/organizations/${orgId}/profiles/${profileId}`, body);
  }

  /**
   * Invite user to sender profile
   */
  inviteProfileUser(orgId: string, profileId: string, body: InviteUserToProfileRequest): Promise<APIResponse> {
    return this.http.post(`/organizations/${orgId}/profiles/${profileId}/users/invite`, body);
  }

  /**
   * Accept user invitation for profile
   */
  acceptProfileInvitation(orgId: string, profileId: string, body: AcceptInvitationRequest): Promise<APIResponse> {
    return this.http.post(`/organizations/${orgId}/profiles/${profileId}/users/invitations/accept`, body);
  }

  /**
   * Create/invite user to sender profile
   */
  createProfileUser(orgId: string, profileId: string, body: CreateProfileUserRequest): Promise<APIResponse> {
    return this.http.post(`/organizations/${orgId}/profiles/${profileId}/users`, body);
  }

  /**
   * Get users in a sender profile
   */
  listProfileUsers(orgId: string, profileId: string, page: number, pageSize: number): Promise<APIResponse> {
    return this.http.get(`/organizations/${orgId}/profiles/${profileId}/users`, { params: this.buildParams({ page, pageSize }) });
  }

  /**
   * Delete/remove user from profile
   */
  deleteProfileUser(orgId: string, profileId: string, userId: string): Promise<APIResponse> {
    return this.http.delete(`/organizations/${orgId}/profiles/${profileId}/users/${userId}`);
  }

  /**
   * Get user by ID in profile
   */
  getProfileUserById(orgId: string, profileId: string, userId: string): Promise<APIResponse> {
    return this.http.get(`/organizations/${orgId}/profiles/${profileId}/users/${userId}`);
  }

  /**
   * Update user role in profile
   */
  updateProfileUser(orgId: string, profileId: string, userId: string, body: UpdateProfileUserRoleRequest): Promise<APIResponse> {
    return this.http.put(`/organizations/${orgId}/profiles/${profileId}/users/${userId}`, body);
  }

  /**
   * Get invitation details by token (profiles)
   */
  getProfileInvitation(customerId: string, profileId: string, token: string): Promise<APIResponse> {
    return this.http.get(`/organizations/${customerId}/profiles/${profileId}/users/invitations/${token}`);
  }

  /**
   * Reject user invitation for profile
   */
  rejectProfileInvitation(orgId: string, profileId: string, body: RejectInvitationRequest): Promise<APIResponse> {
    return this.http.post(`/organizations/${orgId}/profiles/${profileId}/users/invitations/reject`, body);
  }

  /**
   * Get templates for a sender profile
   */
  listProfileTemplates(orgId: string, profileId: string, page: number, pageSize: number, searchTerm?: string, status?: string, category?: string): Promise<APIResponse> {
    return this.http.get(`/organizations/${orgId}/profiles/${profileId}/templates`, { params: this.buildParams({ page, pageSize, searchTerm, status, category }) });
  }

  /**
   * Get contacts for a sender profile
   */
  listProfileContacts(orgId: string, profileId: string, page: number, pageSize: number, searchTerm?: string, channel?: string): Promise<APIResponse> {
    return this.http.get(`/organizations/${orgId}/profiles/${profileId}/contacts`, { params: this.buildParams({ page, pageSize, searchTerm, channel }) });
  }

  /**
   * Get all contacts for an organization
   */
  listOrganizationContacts(orgId: string, page: number, pageSize: number, searchTerm?: string, channel?: string): Promise<APIResponse> {
    return this.http.get(`/organizations/${orgId}/contacts`, { params: this.buildParams({ page, pageSize, searchTerm, channel }) });
  }

  // ========================================
  // Messages
  // ========================================

  /**
   * Get all transactions related to a specific message
   */
  getMessageTransactions(id: string): Promise<APIResponse> {
    return this.http.get(`/messages/${id}/transactions`);
  }

  /**
   * Get message delivery activities and status tracking
   */
  listMessageActivities(customerId: string, messageId: string): Promise<APIResponse> {
    return this.http.get(`/messages/activities`, { params: this.buildParams({ customerId, messageId }) });
  }

  /**
   * Get message details by ID
   */
  getMessageById(customerId: string, id: string): Promise<APIResponse> {
    return this.http.get(`/messages/id`, { params: this.buildParams({ customerId, id }) });
  }

  /**
   * Get messages by customer with pagination
   */
  listMessages(customerId: string, page: number, pageSize: number, searchTerm?: string, channel?: string, status?: string, paymentStatus?: string): Promise<APIResponse> {
    return this.http.get(`/messages`, { params: this.buildParams({ searchTerm, channel, status, customerId, paymentStatus, page, pageSize }) });
  }

  /**
   * Get quick message rate limit status for a customer
   */
  getQuickMessageStatus(customerId: string): Promise<APIResponse> {
    return this.http.get(`/messages/quick`, { params: this.buildParams({ customerId }) });
  }

  /**
   * Send quick message with default template (rate limited to 5 per day)
   */
  sendQuickMessage(body: SendQuickMessageRequest): Promise<APIResponse> {
    return this.http.post(`/messages/quick`, body);
  }

  /**
   * Send message to existing contact
   */
  sendMessageByContact(body: SendMessageByContactRequest): Promise<APIResponse> {
    return this.http.post(`/messages/contact`, body);
  }

  /**
   * Send message to phone number
   */
  sendMessageByPhone(body: SendMessageByNumberRequest): Promise<APIResponse> {
    return this.http.post(`/messages/phone`, body);
  }

  // ========================================
  // Instantiated-Phones
  // ========================================

  /**
   * Associate phone number with customer
   */
  associatePhoneNumber(body: AssociateNumberRequest): Promise<APIResponse> {
    return this.http.post(`/instantiated-phones/associate`, body);
  }

  /**
   * Get available instantiated phone numbers
   */
  listInstantiatedPhones(page: number, pageSize: number, onlyFree?: boolean, searchTerm?: string): Promise<APIResponse> {
    return this.http.get(`/instantiated-phones`, { params: this.buildParams({ onlyFree, searchTerm, page, pageSize }) });
  }

  /**
   * Create new instantiated phone number
   */
  createInstantiatedPhone(body: CreateNumberRequest): Promise<APIResponse> {
    return this.http.post(`/instantiated-phones`, body);
  }

  /**
   * Delete instantiated phone number
   */
  deleteInstantiatedPhone(phoneNumberId: string): Promise<APIResponse> {
    return this.http.delete(`/instantiated-phones/${phoneNumberId}`);
  }

  /**
   * Dissociate phone number from customer
   */
  dissociatePhoneNumber(body: DissociateNumberRequest): Promise<APIResponse> {
    return this.http.post(`/instantiated-phones/dissociate`, body);
  }

  /**
   * Get instantiated phone number by customer ID with optional phone number search
   */
  listCustomerPhoneNumbers(customerId: string, phoneNumber?: string): Promise<APIResponse> {
    return this.http.get(`/instantiated-phones/customer/${customerId}`, { params: this.buildParams({ phoneNumber }) });
  }

  /**
   * Update instantiated phone number metadata
   */
  updateInstantiatedPhone(id: string, body: UpdateInstantiatedPhoneRequest): Promise<APIResponse> {
    return this.http.put(`/instantiated-phones/${id}`, body);
  }

  // ========================================
  // Index
  // ========================================

  /**
   * Change default channel for a contact
   */
  changeContactDefaultChannel(body: ChangeDefaultChannelRequest): Promise<APIResponse> {
    return this.http.put(`/index/contact/default-channel`, body);
  }

  /**
   * Get contact by ID
   */
  getContactById(id: string): Promise<APIResponse> {
    return this.http.get(`/index/contact`, { params: this.buildParams({ id }) });
  }

  /**
   * Get contact by phone number
   */
  getContactByPhone(phoneNumber: string): Promise<APIResponse> {
    return this.http.get(`/index/number`, { params: this.buildParams({ phoneNumber }) });
  }

  /**
   * Get paginated list of contacts with search, filter, and sort capabilities
   */
  listContacts(page: number, pageSize: number, searchTerm?: string, phoneNumber?: string, countryCode?: string, regionCode?: string, filterCountryCode?: string, filterRegionCode?: string, filterAvailableChannels?: string, filterDefaultChannel?: string, sortBy?: string, sortDirection?: string): Promise<APIResponse> {
    return this.http.get(`/index/contacts`, { params: this.buildParams({ searchTerm, phoneNumber, countryCode, regionCode, filterCountryCode, filterRegionCode, filterAvailableChannels, filterDefaultChannel, sortBy, sortDirection, page, pageSize }) });
  }

  // ========================================
  // Default-Channels
  // ========================================

  /**
   * Get paginated list of default channels by country
   */
  listDefaultChannels(page: number, pageSize: number, searchTerm?: string, defaultChannel?: string): Promise<APIResponse> {
    return this.http.get(`/default-channels`, { params: this.buildParams({ searchTerm, defaultChannel, page, pageSize }) });
  }

  /**
   * Update default channel configuration for a country
   */
  updateDefaultChannel(countryCode: string, body: UpdateDefaultChannelRequest): Promise<APIResponse> {
    return this.http.put(`/default-channels/${countryCode}`, body);
  }

  // ========================================
  // Dashboard
  // ========================================

  getDashboardContacts(customerId: string): Promise<APIResponse> {
    return this.http.get(`/dashboard/contacts`, { params: this.buildParams({ customerId }) });
  }

  getDashboardDeliverability(customerId: string): Promise<APIResponse> {
    return this.http.get(`/dashboard/deliverability`, { params: this.buildParams({ customerId }) });
  }

  getDashboardMessagesSent(customerId: string): Promise<APIResponse> {
    return this.http.get(`/dashboard/messages-sent`, { params: this.buildParams({ customerId }) });
  }

  // ========================================
  // Contacts
  // ========================================

  /**
   * Get contact by ID
   */
  getCustomerContactById(customerId: string, id: string): Promise<APIResponse> {
    return this.http.get(`/contacts/id`, { params: this.buildParams({ customerId, id }) });
  }

  /**
   * Get contact by phone number
   */
  getCustomerContactByPhone(customerId: string, phoneNumber: string): Promise<APIResponse> {
    return this.http.get(`/contacts/phone`, { params: this.buildParams({ customerId, phoneNumber }) });
  }

  /**
   * Create multiple contacts by phone numbers
   */
  createContactsByPhone(body: PostCustomerPhoneNumbersRequest): Promise<APIResponse> {
    return this.http.post(`/contacts/phone`, body);
  }

  /**
   * Get paginated contacts by customer
   */
  listCustomerContacts(customerId: string, page: number, pageSize: number, searchTerm?: string, channel?: string, paymentStatus?: string): Promise<APIResponse> {
    return this.http.get(`/contacts`, { params: this.buildParams({ searchTerm, channel, customerId, paymentStatus, page, pageSize }) });
  }

  /**
   * Create contacts from CSV data
   */
  createContactsFromCsv(body: PostCustomerPhoneNumbersRequest): Promise<APIResponse> {
    return this.http.post(`/contacts/csv`, body);
  }
}
