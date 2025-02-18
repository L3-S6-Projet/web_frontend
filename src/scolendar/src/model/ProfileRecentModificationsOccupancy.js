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
    define(['ApiClient', 'model/OccupancyType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OccupancyType'));
  } else {
    // Browser globals (root is window)
    if (!root.Scolendar) {
      root.Scolendar = {};
    }
    root.Scolendar.ProfileRecentModificationsOccupancy = factory(root.Scolendar.ApiClient, root.Scolendar.OccupancyType);
  }
}(this, function(ApiClient, OccupancyType) {
  'use strict';

  /**
   * The ProfileRecentModificationsOccupancy model module.
   * @module model/ProfileRecentModificationsOccupancy
   * @version v1
   */

  /**
   * Constructs a new <code>ProfileRecentModificationsOccupancy</code>.
   * @alias module:model/ProfileRecentModificationsOccupancy
   * @class
   * @param subjectName {String} 
   * @param className {String} 
   * @param occupancyType {module:model/OccupancyType} 
   * @param occupancyStart {Number} 
   * @param occupancyEnd {Number} 
   * @param previousOccupancyStart {Number} Only for the edition modification_type
   * @param previousOccupancyEnd {Number} Only for the edition modification_type
   */
  var exports = function(subjectName, className, occupancyType, occupancyStart, occupancyEnd, previousOccupancyStart, previousOccupancyEnd) {
    this.subjectName = subjectName;
    this.className = className;
    this.occupancyType = occupancyType;
    this.occupancyStart = occupancyStart;
    this.occupancyEnd = occupancyEnd;
    this.previousOccupancyStart = previousOccupancyStart;
    this.previousOccupancyEnd = previousOccupancyEnd;
  };

  /**
   * Constructs a <code>ProfileRecentModificationsOccupancy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfileRecentModificationsOccupancy} obj Optional instance to populate.
   * @return {module:model/ProfileRecentModificationsOccupancy} The populated <code>ProfileRecentModificationsOccupancy</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('subject_name'))
        obj.subjectName = ApiClient.convertToType(data['subject_name'], 'String');
      if (data.hasOwnProperty('class_name'))
        obj.className = ApiClient.convertToType(data['class_name'], 'String');
      if (data.hasOwnProperty('occupancy_type'))
        obj.occupancyType = OccupancyType.constructFromObject(data['occupancy_type']);
      if (data.hasOwnProperty('occupancy_start'))
        obj.occupancyStart = ApiClient.convertToType(data['occupancy_start'], 'Number');
      if (data.hasOwnProperty('occupancy_end'))
        obj.occupancyEnd = ApiClient.convertToType(data['occupancy_end'], 'Number');
      if (data.hasOwnProperty('previous_occupancy_start'))
        obj.previousOccupancyStart = ApiClient.convertToType(data['previous_occupancy_start'], 'Number');
      if (data.hasOwnProperty('previous_occupancy_end'))
        obj.previousOccupancyEnd = ApiClient.convertToType(data['previous_occupancy_end'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} subjectName
   */
  exports.prototype.subjectName = undefined;

  /**
   * @member {String} className
   */
  exports.prototype.className = undefined;

  /**
   * @member {module:model/OccupancyType} occupancyType
   */
  exports.prototype.occupancyType = undefined;

  /**
   * @member {Number} occupancyStart
   */
  exports.prototype.occupancyStart = undefined;

  /**
   * @member {Number} occupancyEnd
   */
  exports.prototype.occupancyEnd = undefined;

  /**
   * Only for the edition modification_type
   * @member {Number} previousOccupancyStart
   */
  exports.prototype.previousOccupancyStart = undefined;

  /**
   * Only for the edition modification_type
   * @member {Number} previousOccupancyEnd
   */
  exports.prototype.previousOccupancyEnd = undefined;

  return exports;

}));
