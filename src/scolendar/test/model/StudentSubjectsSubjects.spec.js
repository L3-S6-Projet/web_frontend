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
    describe('StudentSubjectsSubjects', function() {
      beforeEach(function() {
        instance = new Scolendar.StudentSubjectsSubjects();
      });

      it('should create an instance of StudentSubjectsSubjects', function() {
        // TODO: update the code to test StudentSubjectsSubjects
        expect(instance).to.be.a(Scolendar.StudentSubjectsSubjects);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property className (base name: "class_name")', function() {
        // TODO: update the code to test the property className
        expect(instance).to.have.property('className');
        // expect(instance.className).to.be(expectedValueLiteral);
      });

      it('should have the property teachers (base name: "teachers")', function() {
        // TODO: update the code to test the property teachers
        expect(instance).to.have.property('teachers');
        // expect(instance.teachers).to.be(expectedValueLiteral);
      });

      it('should have the property groups (base name: "groups")', function() {
        // TODO: update the code to test the property groups
        expect(instance).to.have.property('groups');
        // expect(instance.groups).to.be(expectedValueLiteral);
      });

    });
  });

}));