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
    define(['ApiClient', 'model/Level'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Level'));
  } else {
    // Browser globals (root is window)
    if (!root.Scolendar) {
      root.Scolendar = {};
    }
    root.Scolendar.ClassUpdateRequest = factory(root.Scolendar.ApiClient, root.Scolendar.Level);
  }
}(this, function(ApiClient, Level) {
  'use strict';

  /**
   * The ClassUpdateRequest model module.
   * @module model/ClassUpdateRequest
   * @version v1
   */

  /**
   * Constructs a new <code>ClassUpdateRequest</code>.
   * @alias module:model/ClassUpdateRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ClassUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClassUpdateRequest} obj Optional instance to populate.
   * @return {module:model/ClassUpdateRequest} The populated <code>ClassUpdateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('level'))
        obj.level = Level.constructFromObject(data['level']);
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {module:model/Level} level
   */
  exports.prototype.level = undefined;

  return exports;

}));
