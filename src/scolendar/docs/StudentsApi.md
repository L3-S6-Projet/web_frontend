# Scolendar.StudentsApi

All URIs are relative to *http://localhost:3030/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**studentsDelete**](StudentsApi.md#studentsDelete) | **DELETE** /students | Deletes the given students using their IDs.
[**studentsGet**](StudentsApi.md#studentsGet) | **GET** /students | Returns a paginated list of all students.
[**studentsIdGet**](StudentsApi.md#studentsIdGet) | **GET** /students/{id} | Gets information for a student
[**studentsIdOccupanciesGet**](StudentsApi.md#studentsIdOccupanciesGet) | **GET** /students/{id}/occupancies | Gets the occupancies of a student for the given time period.
[**studentsIdPut**](StudentsApi.md#studentsIdPut) | **PUT** /students/{id} | Updates information for a student.
[**studentsIdSubjectsGet**](StudentsApi.md#studentsIdSubjectsGet) | **GET** /students/{id}/subjects | Gets the list of all subjects that a student participates in.
[**studentsPost**](StudentsApi.md#studentsPost) | **POST** /students | Creates a new student.


<a name="studentsDelete"></a>
# **studentsDelete**
> SimpleSuccessResponse studentsDelete(iDRequest)

Deletes the given students using their IDs.

Note : only users with the role `administrator` should be able to access this route. This request should trigger the re-organization of students in the affected groups.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.StudentsApi();

var iDRequest = new Scolendar.IDRequest(); // IDRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.studentsDelete(iDRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iDRequest** | [**IDRequest**](IDRequest.md)|  | 

### Return type

[**SimpleSuccessResponse**](SimpleSuccessResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="studentsGet"></a>
# **studentsGet**
> StudentListResponse studentsGet(opts)

Returns a paginated list of all students.

Note : only users with the role `administrator` should be able to access this route. 10 students should be returned per page. At least three characters should be provided for the search, or the results won't be filtered.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.StudentsApi();

var opts = { 
  'query': "query_example", // String | 
  'page': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.studentsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 

### Return type

[**StudentListResponse**](StudentListResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="studentsIdGet"></a>
# **studentsIdGet**
> StudentResponse studentsIdGet(id)

Gets information for a student

Note : only users with the role `administrator` should be able to access this route.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.StudentsApi();

var id = 56; // Number | Student ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.studentsIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Student ID | 

### Return type

[**StudentResponse**](StudentResponse.md)

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

var apiInstance = new Scolendar.StudentsApi();

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

<a name="studentsIdPut"></a>
# **studentsIdPut**
> SimpleSuccessResponse studentsIdPut(id, studentUpdateRequest)

Updates information for a student.

Note : only users with the role `administrator` should be able to access this route. Only filled fields should be updated. This should trigger the re-organization of groups.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.StudentsApi();

var id = 56; // Number | Student ID

var studentUpdateRequest = new Scolendar.StudentUpdateRequest(); // StudentUpdateRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.studentsIdPut(id, studentUpdateRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Student ID | 
 **studentUpdateRequest** | [**StudentUpdateRequest**](StudentUpdateRequest.md)|  | 

### Return type

[**SimpleSuccessResponse**](SimpleSuccessResponse.md)

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

var apiInstance = new Scolendar.StudentsApi();

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

<a name="studentsPost"></a>
# **studentsPost**
> AccountCreatedResponse studentsPost(studentCreationRequest)

Creates a new student.

Note : only users with the role `administrator` should be able to access this route. This should trigger the re-organization of groups.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.StudentsApi();

var studentCreationRequest = new Scolendar.StudentCreationRequest(); // StudentCreationRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.studentsPost(studentCreationRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **studentCreationRequest** | [**StudentCreationRequest**](StudentCreationRequest.md)|  | 

### Return type

[**AccountCreatedResponse**](AccountCreatedResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

