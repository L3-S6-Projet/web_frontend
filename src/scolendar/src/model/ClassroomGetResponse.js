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
    define(['ApiClient', 'model/Classroom'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Classroom'));
  } else {
    // Browser globals (root is window)
    if (!root.Scolendar) {
      root.Scolendar = {};
    }
    root.Scolendar.ClassroomGetResponse = factory(root.Scolendar.ApiClient, root.Scolendar.Classroom);
  }
}(this, function(ApiClient, Classroom) {
  'use strict';

  /**
   * The ClassroomGetResponse model module.
   * @module model/ClassroomGetResponse
   * @version v1
   */

  /**
   * Constructs a new <code>ClassroomGetResponse</code>.
   * @alias module:model/ClassroomGetResponse
   * @class
   * @param status {String} 
   * @param classroom {module:model/Classroom} 
   */
  var exports = function(status, classroom) {
    this.status = status;
    this.classroom = classroom;
  };

  /**
   * Constructs a <code>ClassroomGetResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClassroomGetResponse} obj Optional instance to populate.
   * @return {module:model/ClassroomGetResponse} The populated <code>ClassroomGetResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('classroom'))
        obj.classroom = Classroom.constructFromObject(data['classroom']);
    }
    return obj;
  }

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {module:model/Classroom} classroom
   */
  exports.prototype.classroom = undefined;

  return exports;

}));