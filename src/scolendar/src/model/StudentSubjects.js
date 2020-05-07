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
    define(['ApiClient', 'model/StudentSubjectsSubjects'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StudentSubjectsSubjects'));
  } else {
    // Browser globals (root is window)
    if (!root.Scolendar) {
      root.Scolendar = {};
    }
    root.Scolendar.StudentSubjects = factory(root.Scolendar.ApiClient, root.Scolendar.StudentSubjectsSubjects);
  }
}(this, function(ApiClient, StudentSubjectsSubjects) {
  'use strict';

  /**
   * The StudentSubjects model module.
   * @module model/StudentSubjects
   * @version v1
   */

  /**
   * Constructs a new <code>StudentSubjects</code>.
   * @alias module:model/StudentSubjects
   * @class
   * @param status {String} 
   * @param subjects {Array.<module:model/StudentSubjectsSubjects>} 
   */
  var exports = function(status, subjects) {
    this.status = status;
    this.subjects = subjects;
  };

  /**
   * Constructs a <code>StudentSubjects</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StudentSubjects} obj Optional instance to populate.
   * @return {module:model/StudentSubjects} The populated <code>StudentSubjects</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('subjects'))
        obj.subjects = ApiClient.convertToType(data['subjects'], [StudentSubjectsSubjects]);
    }
    return obj;
  }

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {Array.<module:model/StudentSubjectsSubjects>} subjects
   */
  exports.prototype.subjects = undefined;

  return exports;

}));