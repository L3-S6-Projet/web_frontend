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
    define(['ApiClient', 'model/SubjectResponseSubject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SubjectResponseSubject'));
  } else {
    // Browser globals (root is window)
    if (!root.Scolendar) {
      root.Scolendar = {};
    }
    root.Scolendar.SubjectResponse = factory(root.Scolendar.ApiClient, root.Scolendar.SubjectResponseSubject);
  }
}(this, function(ApiClient, SubjectResponseSubject) {
  'use strict';

  /**
   * The SubjectResponse model module.
   * @module model/SubjectResponse
   * @version v1
   */

  /**
   * Constructs a new <code>SubjectResponse</code>.
   * @alias module:model/SubjectResponse
   * @class
   * @param status {String} 
   * @param subject {module:model/SubjectResponseSubject} 
   */
  var exports = function(status, subject) {
    this.status = status;
    this.subject = subject;
  };

  /**
   * Constructs a <code>SubjectResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubjectResponse} obj Optional instance to populate.
   * @return {module:model/SubjectResponse} The populated <code>SubjectResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('subject'))
        obj.subject = SubjectResponseSubject.constructFromObject(data['subject']);
    }
    return obj;
  }

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {module:model/SubjectResponseSubject} subject
   */
  exports.prototype.subject = undefined;

  return exports;

}));