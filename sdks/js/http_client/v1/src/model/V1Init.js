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

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.7.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1ArtifactsType from './V1ArtifactsType';
import V1DockerfileType from './V1DockerfileType';
import V1FileType from './V1FileType';
import V1GitType from './V1GitType';

/**
 * The V1Init model module.
 * @module model/V1Init
 * @version 1.7.0
 */
class V1Init {
    /**
     * Constructs a new <code>V1Init</code>.
     * @alias module:model/V1Init
     */
    constructor() { 
        
        V1Init.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Init</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Init} obj Optional instance to populate.
     * @return {module:model/V1Init} The populated <code>V1Init</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Init();

            if (data.hasOwnProperty('artifacts')) {
                obj['artifacts'] = V1ArtifactsType.constructFromObject(data['artifacts']);
            }
            if (data.hasOwnProperty('git')) {
                obj['git'] = V1GitType.constructFromObject(data['git']);
            }
            if (data.hasOwnProperty('dockerfile')) {
                obj['dockerfile'] = V1DockerfileType.constructFromObject(data['dockerfile']);
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = V1FileType.constructFromObject(data['file']);
            }
            if (data.hasOwnProperty('connection')) {
                obj['connection'] = ApiClient.convertToType(data['connection'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('container')) {
                obj['container'] = ApiClient.convertToType(data['container'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/V1ArtifactsType} artifacts
 */
V1Init.prototype['artifacts'] = undefined;

/**
 * @member {module:model/V1GitType} git
 */
V1Init.prototype['git'] = undefined;

/**
 * @member {module:model/V1DockerfileType} dockerfile
 */
V1Init.prototype['dockerfile'] = undefined;

/**
 * @member {module:model/V1FileType} file
 */
V1Init.prototype['file'] = undefined;

/**
 * @member {String} connection
 */
V1Init.prototype['connection'] = undefined;

/**
 * @member {String} path
 */
V1Init.prototype['path'] = undefined;

/**
 * @member {Object} container
 */
V1Init.prototype['container'] = undefined;






export default V1Init;

