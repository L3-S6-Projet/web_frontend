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
    define(['ApiClient', 'model/SubjectResponseSubjectGroups', 'model/SubjectResponseSubjectTeachers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SubjectResponseSubjectGroups'), require('./SubjectResponseSubjectTeachers'));
  } else {
    // Browser globals (root is window)
    if (!root.Scolendar) {
      root.Scolendar = {};
    }
    root.Scolendar.SubjectResponseSubject = factory(root.Scolendar.ApiClient, root.Scolendar.SubjectResponseSubjectGroups, root.Scolendar.SubjectResponseSubjectTeachers);
  }
}(this, function(ApiClient, SubjectResponseSubjectGroups, SubjectResponseSubjectTeachers) {
  'use strict';

  /**
   * The SubjectResponseSubject model module.
   * @module model/SubjectResponseSubject
   * @version v1
   */

  /**
   * Constructs a new <code>SubjectResponseSubject</code>.
   * @alias module:model/SubjectResponseSubject
   * @class
   * @param name {String} 
   * @param className {String} 
   * @param totalHours {Number} 
   */
  var exports = function(name, className, totalHours) {
    this.name = name;
    this.className = className;
    this.totalHours = totalHours;
  };

  /**
   * Constructs a <code>SubjectResponseSubject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubjectResponseSubject} obj Optional instance to populate.
   * @return {module:model/SubjectResponseSubject} The populated <code>SubjectResponseSubject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('class_name'))
        obj.className = ApiClient.convertToType(data['class_name'], 'String');
      if (data.hasOwnProperty('total_hours'))
        obj.totalHours = ApiClient.convertToType(data['total_hours'], 'Number');
      if (data.hasOwnProperty('teachers'))
        obj.teachers = ApiClient.convertToType(data['teachers'], [SubjectResponseSubjectTeachers]);
      if (data.hasOwnProperty('groups'))
        obj.groups = ApiClient.convertToType(data['groups'], [SubjectResponseSubjectGroups]);
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} className
   */
  exports.prototype.className = undefined;

  /**
   * @member {Number} totalHours
   */
  exports.prototype.totalHours = undefined;

  /**
   * @member {Array.<module:model/SubjectResponseSubjectTeachers>} teachers
   */
  exports.prototype.teachers = undefined;

  /**
   * @member {Array.<module:model/SubjectResponseSubjectGroups>} groups
   */
  exports.prototype.groups = undefined;

  return exports;

}));
