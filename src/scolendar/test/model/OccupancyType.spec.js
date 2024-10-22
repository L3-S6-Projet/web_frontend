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
    describe('OccupancyType', function() {
      beforeEach(function() {
        instance = Scolendar.OccupancyType;
      });

      it('should create an instance of OccupancyType', function() {
        // TODO: update the code to test OccupancyType
        expect(instance).to.be.a('object');
      });

      it('should have the property CM', function() {
        expect(instance).to.have.property('CM');
        expect(instance.CM).to.be("CM");
      });

      it('should have the property TD', function() {
        expect(instance).to.have.property('TD');
        expect(instance.TD).to.be("TD");
      });

      it('should have the property TP', function() {
        expect(instance).to.have.property('TP');
        expect(instance.TP).to.be("TP");
      });

      it('should have the property PROJ', function() {
        expect(instance).to.have.property('PROJ');
        expect(instance.PROJ).to.be("PROJ");
      });

      it('should have the property ADM', function() {
        expect(instance).to.have.property('ADM');
        expect(instance.ADM).to.be("ADM");
      });

      it('should have the property EXT', function() {
        expect(instance).to.have.property('EXT');
        expect(instance.EXT).to.be("EXT");
      });

    });
  });

}));
