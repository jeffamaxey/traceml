// Copyright 2018-2021 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.11.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1ComponentHubSettings,
    V1ComponentHubSettingsFromJSON,
    V1ComponentHubSettingsFromJSONTyped,
    V1ComponentHubSettingsToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1ComponentHub
 */
export interface V1ComponentHub {
    /**
     * 
     * @type {string}
     * @memberof V1ComponentHub
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ComponentHub
     */
    owner?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ComponentHub
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ComponentHub
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1ComponentHub
     */
    tags?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof V1ComponentHub
     */
    is_public?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V1ComponentHub
     */
    bookmarked?: boolean;
    /**
     * 
     * @type {number}
     * @memberof V1ComponentHub
     */
    live_state?: number;
    /**
     * 
     * @type {Date}
     * @memberof V1ComponentHub
     */
    created_at?: Date;
    /**
     * 
     * @type {Date}
     * @memberof V1ComponentHub
     */
    updated_at?: Date;
    /**
     * 
     * @type {string}
     * @memberof V1ComponentHub
     */
    readme?: string;
    /**
     * 
     * @type {V1ComponentHubSettings}
     * @memberof V1ComponentHub
     */
    settings?: V1ComponentHubSettings;
    /**
     * 
     * @type {string}
     * @memberof V1ComponentHub
     */
    role?: string;
}

export function V1ComponentHubFromJSON(json: any): V1ComponentHub {
    return V1ComponentHubFromJSONTyped(json, false);
}

export function V1ComponentHubFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ComponentHub {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'is_public': !exists(json, 'is_public') ? undefined : json['is_public'],
        'bookmarked': !exists(json, 'bookmarked') ? undefined : json['bookmarked'],
        'live_state': !exists(json, 'live_state') ? undefined : json['live_state'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'readme': !exists(json, 'readme') ? undefined : json['readme'],
        'settings': !exists(json, 'settings') ? undefined : V1ComponentHubSettingsFromJSON(json['settings']),
        'role': !exists(json, 'role') ? undefined : json['role'],
    };
}

export function V1ComponentHubToJSON(value?: V1ComponentHub | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'owner': value.owner,
        'name': value.name,
        'description': value.description,
        'tags': value.tags,
        'is_public': value.is_public,
        'bookmarked': value.bookmarked,
        'live_state': value.live_state,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
        'readme': value.readme,
        'settings': V1ComponentHubSettingsToJSON(value.settings),
        'role': value.role,
    };
}


