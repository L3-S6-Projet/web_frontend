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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Scolendar);
  }
}(this, function(expect, Scolendar) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('OccupanciesCreationRequest', function() {
      beforeEach(function() {
        instance = new Scolendar.OccupanciesCreationRequest();
      });

      it('should create an instance of OccupanciesCreationRequest', function() {
        // TODO: update the code to test OccupanciesCreationRequest
        expect(instance).to.be.a(Scolendar.OccupanciesCreationRequest);
      });

      it('should have the property classroomId (base name: "classroom_id")', function() {
        // TODO: update the code to test the property classroomId
        expect(instance).to.have.property('classroomId');
        // expect(instance.classroomId).to.be(expectedValueLiteral);
      });

      it('should have the property start (base name: "start")', function() {
        // TODO: update the code to test the property start
        expect(instance).to.have.property('start');
        // expect(instance.start).to.be(expectedValueLiteral);
      });

      it('should have the property end (base name: "end")', function() {
        // TODO: update the code to test the property end
        expect(instance).to.have.property('end');
        // expect(instance.end).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property occupancyType (base name: "occupancy_type")', function() {
        // TODO: update the code to test the property occupancyType
        expect(instance).to.have.property('occupancyType');
        // expect(instance.occupancyType).to.be(expectedValueLiteral);
      });

      it('should have the property teacherId (base name: "teacher_id")', function() {
        // TODO: update the code to test the property teacherId
        expect(instance).to.have.property('teacherId');
        // expect(instance.teacherId).to.be(expectedValueLiteral);
      });

    });
  });

}));