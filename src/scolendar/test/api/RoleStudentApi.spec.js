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

  beforeEach(function() {
    instance = new Scolendar.RoleStudentApi();
  });

  describe('(package)', function() {
    describe('RoleStudentApi', function() {
      describe('login', function() {
        it('should call login successfully', function(done) {
          // TODO: uncomment, update parameter values for login call and complete the assertions
          /*
          var loginRequest = new Scolendar.LoginRequest();
          loginRequest.username = "azure_diamond";
          loginRequest.password = "hunter2";

          instance.login(loginRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Scolendar.SuccessfulLoginResponse);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("success");
            expect(data.token).to.be.a('string');
            expect(data.token).to.be("....");
            expect(data.user).to.be.a(Scolendar.SuccessfulLoginResponseUser);
                  expect(data.user.id).to.be.a('number');
              expect(data.user.id).to.be(0);
              expect(data.user.firstName).to.be.a('string');
              expect(data.user.firstName).to.be("");
              expect(data.user.lastName).to.be.a('string');
              expect(data.user.lastName).to.be("");
              expect(data.user.kind).to.be.a(Scolendar.Role);
      

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('logout', function() {
        it('should call logout successfully', function(done) {
          // TODO: uncomment logout call and complete the assertions
          /*

          instance.logout(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Scolendar.SimpleSuccessResponse);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("success");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('profileFeedsIcalGet', function() {
        it('should call profileFeedsIcalGet successfully', function(done) {
          // TODO: uncomment profileFeedsIcalGet call and complete the assertions
          /*

          instance.profileFeedsIcalGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Scolendar.ICALFeed);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("success");
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("http://localhost:3030/api/feeds/ical/$TOKEN");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('profileLastOccupanciesModificationsGet', function() {
        it('should call profileLastOccupanciesModificationsGet successfully', function(done) {
          // TODO: uncomment profileLastOccupanciesModificationsGet call and complete the assertions
          /*

          instance.profileLastOccupanciesModificationsGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Scolendar.ProfileRecentModifications);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("success");
            {
              let dataCtr = data.modifications;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Scolendar.ProfileRecentModificationsModifications);
                expect(data.modificationType).to.be.a('string');
                expect(data.modificationType).to.be("CREATE");
                expect(data.modificationTimestamp).to.be.a('number');
                expect(data.modificationTimestamp).to.be(1587987080);
                expect(data.occupancy).to.be.a(Scolendar.ProfileRecentModificationsOccupancy);
                      expect(data.occupancy.subjectName).to.be.a('string');
                  expect(data.occupancy.subjectName).to.be("PPPE (nullable if external)");
                  expect(data.occupancy.className).to.be.a('string');
                  expect(data.occupancy.className).to.be("L3 Informatique (nullable if external)");
                  expect(data.occupancy.occupancyType).to.be.a(Scolendar.OccupancyType);
                      expect(data.occupancy.occupancyStart).to.be.a('number');
                  expect(data.occupancy.occupancyStart).to.be(1587987080);
                  expect(data.occupancy.occupancyEnd).to.be.a('number');
                  expect(data.occupancy.occupancyEnd).to.be(1587987080);
                  expect(data.occupancy.previousOccupancyStart).to.be.a('number');
                  expect(data.occupancy.previousOccupancyStart).to.be(1587987080);
                  expect(data.occupancy.previousOccupancyEnd).to.be.a('number');
                  expect(data.occupancy.previousOccupancyEnd).to.be(1587987080);

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('profilePut', function() {
        it('should call profilePut successfully', function(done) {
          // TODO: uncomment, update parameter values for profilePut call and complete the assertions
          /*
          var profileUpdateRequest = new Scolendar.ProfileUpdateRequest();
          profileUpdateRequest.oldPassword = "12345";
          profileUpdateRequest.password = "54321";

          instance.profilePut(profileUpdateRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Scolendar.SimpleSuccessResponse);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("success");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('studentsIdOccupanciesGet', function() {
        it('should call studentsIdOccupanciesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for studentsIdOccupanciesGet call and complete the assertions
          /*
          var id = 56;
          var opts = {};
          opts.start = 56;
          opts.end = 56;
          opts.occupanciesPerDay = 56;

          instance.studentsIdOccupanciesGet(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Scolendar.Occupancies);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("success");
            {
              let dataCtr = data.days;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Scolendar.OccupanciesDays);
                expect(data._date).to.be.a('string');
                expect(data._date).to.be("01-05-2020");
                {
                  let dataCtr = data.occupancies;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Scolendar.OccupanciesOccupancies);
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be(0);
                    expect(data.classroomName).to.be.a('string');
                    expect(data.classroomName).to.be("B.001");
                    expect(data.groupName).to.be.a('string');
                    expect(data.groupName).to.be("Groupe 1");
                    expect(data.subjectName).to.be.a('string');
                    expect(data.subjectName).to.be("Algorithmique");
                    expect(data.teacherName).to.be.a('string');
                    expect(data.teacherName).to.be("mylan chevalier");
                    expect(data.start).to.be.a('number');
                    expect(data.start).to.be(1587776227);
                    expect(data.end).to.be.a('number');
                    expect(data.end).to.be(1587779827);
                    expect(data.occupancyType).to.be.a(Scolendar.OccupancyType);
                        expect(data.className).to.be.a('string');
                    expect(data.className).to.be("L3 Informatique");
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("Algorithmique CM Groupe 1");
    
                          }
                }

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('studentsIdSubjectsGet', function() {
        it('should call studentsIdSubjectsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for studentsIdSubjectsGet call and complete the assertions
          /*
          var id = 56;

          instance.studentsIdSubjectsGet(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Scolendar.StudentSubjects);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("success");
            {
              let dataCtr = data.subjects;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Scolendar.StudentSubjectsSubjects);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("PPPE");
                expect(data.className).to.be.a('string');
                expect(data.className).to.be("L3 Informatique");
                {
                  let dataCtr = data.teachers;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Scolendar.TeacherSubjectsTeachers);
                    expect(data.firstName).to.be.a('string');
                    expect(data.firstName).to.be("Butch");
                    expect(data.lastName).to.be.a('string');
                    expect(data.lastName).to.be("Cranky");
                    expect(data.inCharge).to.be.a('boolean');
                    expect(data.inCharge).to.be(true);
                    expect(data.email).to.be.a('string');
                    expect(data.email).to.be("butch.cranky@nook.mail");
                    expect(data.phoneNumber).to.be.a('string');
                    expect(data.phoneNumber).to.be("06 71 55 50 11");
    
                          }
                }
                {
                  let dataCtr = data.groups;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Scolendar.StudentSubjectsGroups);
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("Groupe 1");
                    expect(data.count).to.be.a('number');
                    expect(data.count).to.be(22);
                    expect(data.isStudentGroup).to.be.a('boolean');
                    expect(data.isStudentGroup).to.be(false);
    
                          }
                }

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
