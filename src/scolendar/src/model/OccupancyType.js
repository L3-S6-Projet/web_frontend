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
    root.Scolendar.OccupancyType = factory(root.Scolendar.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Enum class OccupancyType.
   * @enum {String}
   * @readonly
   */
  var exports = {
    /**
     * value: "CM"
     * @const
     */
    CM: "CM",

    /**
     * value: "TD"
     * @const
     */
    TD: "TD",

    /**
     * value: "TP"
     * @const
     */
    TP: "TP",

    /**
     * value: "PROJ"
     * @const
     */
    PROJ: "PROJ",

    /**
     * value: "ADM"
     * @const
     */
    ADM: "ADM",

    /**
     * value: "EXT"
     * @const
     */
    EXT: "EXT"
  };

  /**
   * Returns a <code>OccupancyType</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/OccupancyType} The enum <code>OccupancyType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));
