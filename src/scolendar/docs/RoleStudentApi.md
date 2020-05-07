# Scolendar.RoleStudentApi

All URIs are relative to *http://localhost:3030/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](RoleStudentApi.md#login) | **POST** /session | Logins the user to the application, returning a new auth token and the user role.
[**logout**](RoleStudentApi.md#logout) | **DELETE** /session | Destroys the given auth token.
[**profileFeedsIcalGet**](RoleStudentApi.md#profileFeedsIcalGet) | **GET** /profile/feeds/ical | Gets the url to the ICAL feed of the user calendar.
[**profileLastOccupanciesModificationsGet**](RoleStudentApi.md#profileLastOccupanciesModificationsGet) | **GET** /profile/last-occupancies-modifications | Returns a list of all recent occupancies modifications that are relevant to the user.
[**profilePut**](RoleStudentApi.md#profilePut) | **PUT** /profile | Updates the user model.
[**studentsIdOccupanciesGet**](RoleStudentApi.md#studentsIdOccupanciesGet) | **GET** /students/{id}/occupancies | Gets the occupancies of a student for the given time period.
[**studentsIdSubjectsGet**](RoleStudentApi.md#studentsIdSubjectsGet) | **GET** /students/{id}/subjects | Gets the list of all subjects that a student participates in.


<a name="login"></a>
# **login**
> SuccessfulLoginResponse login(loginRequest)

Logins the user to the application, returning a new auth token and the user role.

### Example
```javascript
var Scolendar = require('scolendar');

var apiInstance = new Scolendar.RoleStudentApi();

var loginRequest = new Scolendar.LoginRequest(); // LoginRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.login(loginRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginRequest** | [**LoginRequest**](LoginRequest.md)|  | 

### Return type

[**SuccessfulLoginResponse**](SuccessfulLoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logout"></a>
# **logout**
> SimpleSuccessResponse logout()

Destroys the given auth token.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.RoleStudentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logout(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SimpleSuccessResponse**](SimpleSuccessResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="profileFeedsIcalGet"></a>
# **profileFeedsIcalGet**
> ICALFeed profileFeedsIcalGet()

Gets the url to the ICAL feed of the user calendar.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.RoleStudentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.profileFeedsIcalGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ICALFeed**](ICALFeed.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="profileLastOccupanciesModificationsGet"></a>
# **profileLastOccupanciesModificationsGet**
> ProfileRecentModifications profileLastOccupanciesModificationsGet()

Returns a list of all recent occupancies modifications that are relevant to the user.

Modifications that are relevant are: - For a teacher: modifications of occupancies about a subject that they teach, or modifications of their own external occupancies. - For a student : modifications of occupancies about a subject that they take. Only the last 25 modifications should be returned.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.RoleStudentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.profileLastOccupanciesModificationsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ProfileRecentModifications**](ProfileRecentModifications.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="profilePut"></a>
# **profilePut**
> SimpleSuccessResponse profilePut(profileUpdateRequest)

Updates the user model.

Should be accessible by every user.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.RoleStudentApi();

var profileUpdateRequest = new Scolendar.ProfileUpdateRequest(); // ProfileUpdateRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.profilePut(profileUpdateRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileUpdateRequest** | [**ProfileUpdateRequest**](ProfileUpdateRequest.md)|  | 

### Return type

[**SimpleSuccessResponse**](SimpleSuccessResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="studentsIdOccupanciesGet"></a>
# **studentsIdOccupanciesGet**
> Occupancies studentsIdOccupanciesGet(id, opts)

Gets the occupancies of a student for the given time period.

Note : only users with the role `administrator`, or students whose id match the one in the URL should be able to access this route.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.RoleStudentApi();

var id = 56; // Number | Student ID

var opts = { 
  'start': 56, // Number | Start timestamp of the occupancies
  'end': 56, // Number | End timestamp of the occupancies
  'occupanciesPerDay': 56 // Number | Pass 0 to return ALL the events.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.studentsIdOccupanciesGet(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Student ID | 
 **start** | **Number**| Start timestamp of the occupancies | [optional] 
 **end** | **Number**| End timestamp of the occupancies | [optional] 
 **occupanciesPerDay** | **Number**| Pass 0 to return ALL the events. | [optional] 

### Return type

[**Occupancies**](Occupancies.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="studentsIdSubjectsGet"></a>
# **studentsIdSubjectsGet**
> StudentSubjects studentsIdSubjectsGet(id)

Gets the list of all subjects that a student participates in.

Note : only students whose id match the one in the URL should be able to access this route.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.RoleStudentApi();

var id = 56; // Number | Student ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.studentsIdSubjectsGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Student ID | 

### Return type

[**StudentSubjects**](StudentSubjects.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

