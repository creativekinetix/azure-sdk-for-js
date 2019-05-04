/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/enterpriseChannelsMappers";
import * as Parameters from "../models/parameters";
import { AzureBotServiceContext } from "../azureBotServiceContext";

/** Class representing a EnterpriseChannels. */
export class EnterpriseChannels {
  private readonly client: AzureBotServiceContext;

  /**
   * Create a EnterpriseChannels.
   * @param {AzureBotServiceContext} client Reference to the service client.
   */
  constructor(client: AzureBotServiceContext) {
    this.client = client;
  }

  /**
   * Check whether an Enterprise Channel name is available.
   * @param parameters The parameters to provide for the Enterprise Channel check name availability
   * request.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnterpriseChannelsCheckNameAvailabilityResponse>
   */
  checkNameAvailability(parameters: Models.EnterpriseChannelCheckNameAvailabilityRequest, options?: msRest.RequestOptionsBase): Promise<Models.EnterpriseChannelsCheckNameAvailabilityResponse>;
  /**
   * @param parameters The parameters to provide for the Enterprise Channel check name availability
   * request.
   * @param callback The callback
   */
  checkNameAvailability(parameters: Models.EnterpriseChannelCheckNameAvailabilityRequest, callback: msRest.ServiceCallback<Models.EnterpriseChannelCheckNameAvailabilityResponse>): void;
  /**
   * @param parameters The parameters to provide for the Enterprise Channel check name availability
   * request.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkNameAvailability(parameters: Models.EnterpriseChannelCheckNameAvailabilityRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EnterpriseChannelCheckNameAvailabilityResponse>): void;
  checkNameAvailability(parameters: Models.EnterpriseChannelCheckNameAvailabilityRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EnterpriseChannelCheckNameAvailabilityResponse>, callback?: msRest.ServiceCallback<Models.EnterpriseChannelCheckNameAvailabilityResponse>): Promise<Models.EnterpriseChannelsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        parameters,
        options
      },
      checkNameAvailabilityOperationSpec,
      callback) as Promise<Models.EnterpriseChannelsCheckNameAvailabilityResponse>;
  }

  /**
   * Returns all the resources of a particular type belonging to a resource group.
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnterpriseChannelsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.EnterpriseChannelsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.EnterpriseChannelResponseList>): void;
  /**
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EnterpriseChannelResponseList>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EnterpriseChannelResponseList>, callback?: msRest.ServiceCallback<Models.EnterpriseChannelResponseList>): Promise<Models.EnterpriseChannelsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.EnterpriseChannelsListByResourceGroupResponse>;
  }

  /**
   * Creates an Enterprise Channel.
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param parameters The parameters to provide for the new Enterprise Channel.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnterpriseChannelsCreateResponse>
   */
  create(resourceGroupName: string, resourceName: string, parameters: Models.EnterpriseChannel, options?: msRest.RequestOptionsBase): Promise<Models.EnterpriseChannelsCreateResponse> {
    return this.beginCreate(resourceGroupName,resourceName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.EnterpriseChannelsCreateResponse>;
  }

  /**
   * Updates an Enterprise Channel.
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnterpriseChannelsUpdateResponse>
   */
  update(resourceGroupName: string, resourceName: string, options?: Models.EnterpriseChannelsUpdateOptionalParams): Promise<Models.EnterpriseChannelsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,resourceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.EnterpriseChannelsUpdateResponse>;
  }

  /**
   * Deletes an Enterprise Channel from the resource group
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,resourceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Returns an Enterprise Channel specified by the parameters.
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnterpriseChannelsGetResponse>
   */
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.EnterpriseChannelsGetResponse>;
  /**
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.EnterpriseChannel>): void;
  /**
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EnterpriseChannel>): void;
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EnterpriseChannel>, callback?: msRest.ServiceCallback<Models.EnterpriseChannel>): Promise<Models.EnterpriseChannelsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.EnterpriseChannelsGetResponse>;
  }

  /**
   * Creates an Enterprise Channel.
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param parameters The parameters to provide for the new Enterprise Channel.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, resourceName: string, parameters: Models.EnterpriseChannel, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        parameters,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Updates an Enterprise Channel.
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, resourceName: string, options?: Models.EnterpriseChannelsBeginUpdateOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Deletes an Enterprise Channel from the resource group
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Returns all the resources of a particular type belonging to a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnterpriseChannelsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.EnterpriseChannelsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.EnterpriseChannelResponseList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EnterpriseChannelResponseList>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EnterpriseChannelResponseList>, callback?: msRest.ServiceCallback<Models.EnterpriseChannelResponseList>): Promise<Models.EnterpriseChannelsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.EnterpriseChannelsListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const checkNameAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.BotService/checkEnterpriseChannelNameAvailability",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.EnterpriseChannelCheckNameAvailabilityRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.EnterpriseChannelCheckNameAvailabilityResponse
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/enterpriseChannels",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EnterpriseChannelResponseList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/enterpriseChannels/{resourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EnterpriseChannel
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/enterpriseChannels/{resourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.EnterpriseChannel,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.EnterpriseChannel
    },
    201: {
      bodyMapper: Mappers.EnterpriseChannel
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/enterpriseChannels/{resourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      location: [
        "options",
        "location"
      ],
      tags: [
        "options",
        "tags"
      ],
      sku: [
        "options",
        "sku"
      ],
      kind: [
        "options",
        "kind"
      ],
      etag: [
        "options",
        "etag"
      ],
      properties: [
        "options",
        "properties"
      ]
    },
    mapper: {
      ...Mappers.EnterpriseChannel,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.EnterpriseChannel
    },
    201: {
      bodyMapper: Mappers.EnterpriseChannel
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/enterpriseChannels/{resourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EnterpriseChannelResponseList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};