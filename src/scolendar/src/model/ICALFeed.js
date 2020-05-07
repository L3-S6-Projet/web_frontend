/*
 * Scolendar
 * UE Projet - L3 Informatique AMU 2019-2020 All of the routes missing the `role-professor` or `role-student` tags are meant for administrators only - as stated in their descriptions.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Scolendar) {
      root.Scolendar = {};
    }
    root.Scolendar.ICALFeed = factory(root.Scolendar.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ICALFeed model module.
   * @module model/ICALFeed
   * @version v1
   */

  /**
   * Constructs a new <code>ICALFeed</code>.
   * @alias module:model/ICALFeed
   * @class
   * @param status {String} 
   * @param url {String} 
   */
  var exports = function(status, url) {
    this.status = status;
    this.url = url;
  };

  /**
   * Constructs a <code>ICALFeed</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ICALFeed} obj Optional instance to populate.
   * @return {module:model/ICALFeed} The populated <code>ICALFeed</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {String} url
   */
  exports.prototype.url = undefined;

  return exports;

}));
