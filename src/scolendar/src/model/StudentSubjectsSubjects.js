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
    define(['ApiClient', 'model/StudentSubjectsGroups', 'model/TeacherSubjectsTeachers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StudentSubjectsGroups'), require('./TeacherSubjectsTeachers'));
  } else {
    // Browser globals (root is window)
    if (!root.Scolendar) {
      root.Scolendar = {};
    }
    root.Scolendar.StudentSubjectsSubjects = factory(root.Scolendar.ApiClient, root.Scolendar.StudentSubjectsGroups, root.Scolendar.TeacherSubjectsTeachers);
  }
}(this, function(ApiClient, StudentSubjectsGroups, TeacherSubjectsTeachers) {
  'use strict';

  /**
   * The StudentSubjectsSubjects model module.
   * @module model/StudentSubjectsSubjects
   * @version v1
   */

  /**
   * Constructs a new <code>StudentSubjectsSubjects</code>.
   * @alias module:model/StudentSubjectsSubjects
   * @class
   * @param name {String} 
   * @param className {String} 
   * @param teachers {Array.<module:model/TeacherSubjectsTeachers>} 
   * @param groups {Array.<module:model/StudentSubjectsGroups>} 
   */
  var exports = function(name, className, teachers, groups) {
    this.name = name;
    this.className = className;
    this.teachers = teachers;
    this.groups = groups;
  };

  /**
   * Constructs a <code>StudentSubjectsSubjects</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StudentSubjectsSubjects} obj Optional instance to populate.
   * @return {module:model/StudentSubjectsSubjects} The populated <code>StudentSubjectsSubjects</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('class_name'))
        obj.className = ApiClient.convertToType(data['class_name'], 'String');
      if (data.hasOwnProperty('teachers'))
        obj.teachers = ApiClient.convertToType(data['teachers'], [TeacherSubjectsTeachers]);
      if (data.hasOwnProperty('groups'))
        obj.groups = ApiClient.convertToType(data['groups'], [StudentSubjectsGroups]);
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
   * @member {Array.<module:model/TeacherSubjectsTeachers>} teachers
   */
  exports.prototype.teachers = undefined;

  /**
   * @member {Array.<module:model/StudentSubjectsGroups>} groups
   */
  exports.prototype.groups = undefined;

  return exports;

}));