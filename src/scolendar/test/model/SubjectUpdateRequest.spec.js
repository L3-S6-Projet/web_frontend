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
    describe('SubjectUpdateRequest', function() {
      beforeEach(function() {
        instance = new Scolendar.SubjectUpdateRequest();
      });

      it('should create an instance of SubjectUpdateRequest', function() {
        // TODO: update the code to test SubjectUpdateRequest
        expect(instance).to.be.a(Scolendar.SubjectUpdateRequest);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property teacherInChargeId (base name: "teacher_in_charge_id")', function() {
        // TODO: update the code to test the property teacherInChargeId
        expect(instance).to.have.property('teacherInChargeId');
        // expect(instance.teacherInChargeId).to.be(expectedValueLiteral);
      });

    });
  });

}));
