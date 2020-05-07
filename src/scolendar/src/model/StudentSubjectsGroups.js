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
    root.Scolendar.StudentSubjectsGroups = factory(root.Scolendar.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StudentSubjectsGroups model module.
   * @module model/StudentSubjectsGroups
   * @version v1
   */

  /**
   * Constructs a new <code>StudentSubjectsGroups</code>.
   * @alias module:model/StudentSubjectsGroups
   * @class
   * @param name {String} 
   * @param count {Number} 
   * @param isStudentGroup {Boolean} 
   */
  var exports = function(name, count, isStudentGroup) {
    this.name = name;
    this.count = count;
    this.isStudentGroup = isStudentGroup;
  };

  /**
   * Constructs a <code>StudentSubjectsGroups</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StudentSubjectsGroups} obj Optional instance to populate.
   * @return {module:model/StudentSubjectsGroups} The populated <code>StudentSubjectsGroups</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
      if (data.hasOwnProperty('is_student_group'))
        obj.isStudentGroup = ApiClient.convertToType(data['is_student_group'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Number} count
   */
  exports.prototype.count = undefined;

  /**
   * @member {Boolean} isStudentGroup
   */
  exports.prototype.isStudentGroup = undefined;

  return exports;

}));