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
import V1OptimizationMetric from './V1OptimizationMetric';
import V1OptimizationResource from './V1OptimizationResource';

/**
 * The V1Hyperband model module.
 * @module model/V1Hyperband
 * @version 1.7.0
 */
class V1Hyperband {
    /**
     * Constructs a new <code>V1Hyperband</code>.
     * @alias module:model/V1Hyperband
     */
    constructor() { 
        
        V1Hyperband.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Hyperband</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Hyperband} obj Optional instance to populate.
     * @return {module:model/V1Hyperband} The populated <code>V1Hyperband</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Hyperband();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], {'String': Object});
            }
            if (data.hasOwnProperty('maxIterations')) {
                obj['maxIterations'] = ApiClient.convertToType(data['maxIterations'], 'Number');
            }
            if (data.hasOwnProperty('eta')) {
                obj['eta'] = ApiClient.convertToType(data['eta'], 'Number');
            }
            if (data.hasOwnProperty('resource')) {
                obj['resource'] = V1OptimizationResource.constructFromObject(data['resource']);
            }
            if (data.hasOwnProperty('metric')) {
                obj['metric'] = V1OptimizationMetric.constructFromObject(data['metric']);
            }
            if (data.hasOwnProperty('resume')) {
                obj['resume'] = ApiClient.convertToType(data['resume'], 'Boolean');
            }
            if (data.hasOwnProperty('seed')) {
                obj['seed'] = ApiClient.convertToType(data['seed'], 'Number');
            }
            if (data.hasOwnProperty('concurrency')) {
                obj['concurrency'] = ApiClient.convertToType(data['concurrency'], 'Number');
            }
            if (data.hasOwnProperty('container')) {
                obj['container'] = ApiClient.convertToType(data['container'], Object);
            }
            if (data.hasOwnProperty('earlyStopping')) {
                obj['earlyStopping'] = ApiClient.convertToType(data['earlyStopping'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} kind
 * @default 'hyperband'
 */
V1Hyperband.prototype['kind'] = 'hyperband';

/**
 * @member {Object.<String, Object>} params
 */
V1Hyperband.prototype['params'] = undefined;

/**
 * @member {Number} maxIterations
 */
V1Hyperband.prototype['maxIterations'] = undefined;

/**
 * @member {Number} eta
 */
V1Hyperband.prototype['eta'] = undefined;

/**
 * @member {module:model/V1OptimizationResource} resource
 */
V1Hyperband.prototype['resource'] = undefined;

/**
 * @member {module:model/V1OptimizationMetric} metric
 */
V1Hyperband.prototype['metric'] = undefined;

/**
 * @member {Boolean} resume
 */
V1Hyperband.prototype['resume'] = undefined;

/**
 * @member {Number} seed
 */
V1Hyperband.prototype['seed'] = undefined;

/**
 * @member {Number} concurrency
 */
V1Hyperband.prototype['concurrency'] = undefined;

/**
 * @member {Object} container
 */
V1Hyperband.prototype['container'] = undefined;

/**
 * @member {Array.<Object>} earlyStopping
 */
V1Hyperband.prototype['earlyStopping'] = undefined;






export default V1Hyperband;

