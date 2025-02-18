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
    define(['ApiClient', 'model/ErrorResponse', 'model/ICALFeed', 'model/LoginRequest', 'model/Occupancies', 'model/ProfileRecentModifications', 'model/ProfileUpdateRequest', 'model/SimpleSuccessResponse', 'model/StudentSubjects', 'model/SuccessfulLoginResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/ICALFeed'), require('../model/LoginRequest'), require('../model/Occupancies'), require('../model/ProfileRecentModifications'), require('../model/ProfileUpdateRequest'), require('../model/SimpleSuccessResponse'), require('../model/StudentSubjects'), require('../model/SuccessfulLoginResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Scolendar) {
      root.Scolendar = {};
    }
    root.Scolendar.RoleStudentApi = factory(root.Scolendar.ApiClient, root.Scolendar.ErrorResponse, root.Scolendar.ICALFeed, root.Scolendar.LoginRequest, root.Scolendar.Occupancies, root.Scolendar.ProfileRecentModifications, root.Scolendar.ProfileUpdateRequest, root.Scolendar.SimpleSuccessResponse, root.Scolendar.StudentSubjects, root.Scolendar.SuccessfulLoginResponse);
  }
}(this, function(ApiClient, ErrorResponse, ICALFeed, LoginRequest, Occupancies, ProfileRecentModifications, ProfileUpdateRequest, SimpleSuccessResponse, StudentSubjects, SuccessfulLoginResponse) {
  'use strict';

  /**
   * RoleStudent service.
   * @module api/RoleStudentApi
   * @version v1
   */

  /**
   * Constructs a new RoleStudentApi. 
   * @alias module:api/RoleStudentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the login operation.
     * @callback module:api/RoleStudentApi~loginCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessfulLoginResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Logins the user to the application, returning a new auth token and the user role.
     * @param {module:model/LoginRequest} loginRequest 
     * @param {module:api/RoleStudentApi~loginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessfulLoginResponse}
     */
    this.login = function(loginRequest, callback) {
      var postBody = loginRequest;

      // verify the required parameter 'loginRequest' is set
      if (loginRequest === undefined || loginRequest === null) {
        throw new Error("Missing the required parameter 'loginRequest' when calling login");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SuccessfulLoginResponse;

      return this.apiClient.callApi(
        '/session', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the logout operation.
     * @callback module:api/RoleStudentApi~logoutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SimpleSuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Destroys the given auth token.
     * @param {module:api/RoleStudentApi~logoutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SimpleSuccessResponse}
     */
    this.logout = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SimpleSuccessResponse;

      return this.apiClient.callApi(
        '/session', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the profileFeedsIcalGet operation.
     * @callback module:api/RoleStudentApi~profileFeedsIcalGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ICALFeed} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the url to the ICAL feed of the user calendar.
     * @param {module:api/RoleStudentApi~profileFeedsIcalGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ICALFeed}
     */
    this.profileFeedsIcalGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = ICALFeed;

      return this.apiClient.callApi(
        '/profile/feeds/ical', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the profileLastOccupanciesModificationsGet operation.
     * @callback module:api/RoleStudentApi~profileLastOccupanciesModificationsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProfileRecentModifications} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of all recent occupancies modifications that are relevant to the user.
     * Modifications that are relevant are: - For a teacher: modifications of occupancies about a subject that they teach, or modifications of their own external occupancies. - For a student : modifications of occupancies about a subject that they take. Only the last 25 modifications should be returned.
     * @param {module:api/RoleStudentApi~profileLastOccupanciesModificationsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProfileRecentModifications}
     */
    this.profileLastOccupanciesModificationsGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = ProfileRecentModifications;

      return this.apiClient.callApi(
        '/profile/last-occupancies-modifications', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the profilePut operation.
     * @callback module:api/RoleStudentApi~profilePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SimpleSuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the user model.
     * Should be accessible by every user.
     * @param {module:model/ProfileUpdateRequest} profileUpdateRequest 
     * @param {module:api/RoleStudentApi~profilePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SimpleSuccessResponse}
     */
    this.profilePut = function(profileUpdateRequest, callback) {
      var postBody = profileUpdateRequest;

      // verify the required parameter 'profileUpdateRequest' is set
      if (profileUpdateRequest === undefined || profileUpdateRequest === null) {
        throw new Error("Missing the required parameter 'profileUpdateRequest' when calling profilePut");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = SimpleSuccessResponse;

      return this.apiClient.callApi(
        '/profile', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the studentsIdOccupanciesGet operation.
     * @callback module:api/RoleStudentApi~studentsIdOccupanciesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Occupancies} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the occupancies of a student for the given time period.
     * Note : only users with the role `administrator`, or students whose id match the one in the URL should be able to access this route.
     * @param {Number} id Student ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start Start timestamp of the occupancies
     * @param {Number} opts.end End timestamp of the occupancies
     * @param {Number} opts.occupanciesPerDay Pass 0 to return ALL the events.
     * @param {module:api/RoleStudentApi~studentsIdOccupanciesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Occupancies}
     */
    this.studentsIdOccupanciesGet = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling studentsIdOccupanciesGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'start': opts['start'],
        'end': opts['end'],
        'occupancies_per_day': opts['occupanciesPerDay'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Occupancies;

      return this.apiClient.callApi(
        '/students/{id}/occupancies', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the studentsIdSubjectsGet operation.
     * @callback module:api/RoleStudentApi~studentsIdSubjectsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StudentSubjects} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the list of all subjects that a student participates in.
     * Note : only students whose id match the one in the URL should be able to access this route.
     * @param {Number} id Student ID
     * @param {module:api/RoleStudentApi~studentsIdSubjectsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StudentSubjects}
     */
    this.studentsIdSubjectsGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling studentsIdSubjectsGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = StudentSubjects;

      return this.apiClient.callApi(
        '/students/{id}/subjects', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
