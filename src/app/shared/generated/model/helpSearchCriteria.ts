/**
 * onecx-help bff
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface HelpSearchCriteria { 
    itemId?: string;
    context?: string;
    baseUrl?: string;
    resourceUrl?: string;
    productName?: string;
    /**
     * The number of page.
     */
    pageNumber?: number;
    /**
     * The size of page
     */
    pageSize?: number;
}

