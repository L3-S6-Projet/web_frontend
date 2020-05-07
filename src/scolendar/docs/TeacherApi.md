# Scolendar.TeacherApi

All URIs are relative to *http://localhost:3030/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teachersDelete**](TeacherApi.md#teachersDelete) | **DELETE** /teachers | Deletes the given teachers using their IDs.
[**teachersGet**](TeacherApi.md#teachersGet) | **GET** /teachers | Returns a paginated list of all teachers.
[**teachersIdGet**](TeacherApi.md#teachersIdGet) | **GET** /teachers/{id} | Gets information for a teacher
[**teachersIdOccupanciesGet**](TeacherApi.md#teachersIdOccupanciesGet) | **GET** /teachers/{id}/occupancies | Gets the occupancies of a teacher for the given time period.
[**teachersIdPut**](TeacherApi.md#teachersIdPut) | **PUT** /teachers/{id} | Updates information for a teacher.
[**teachersIdSubjectsGet**](TeacherApi.md#teachersIdSubjectsGet) | **GET** /teachers/{id}/subjects | Gets the list of all subjects that a teacher participates in.
[**teachersPost**](TeacherApi.md#teachersPost) | **POST** /teachers | Creates a new teacher.


<a name="teachersDelete"></a>
# **teachersDelete**
> SimpleSuccessResponse teachersDelete(iDRequest)

Deletes the given teachers using their IDs.

Note : only users with the role `administrator` should be able to access this route. This request should be denied if the professors are in charge of any subjects. This should cascade and delete any occupancies they are a part of, and remove them from any subjects they took part in.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.TeacherApi();

var iDRequest = new Scolendar.IDRequest(); // IDRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teachersDelete(iDRequest, callback);
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

<a name="teachersGet"></a>
# **teachersGet**
> TeacherListResponse teachersGet(opts)

Returns a paginated list of all teachers.

Note : only users with the role `administrator` should be able to access this route. 10 teachers should be returned per page. If less than three characters are provided for the query, it will not be applied. Warning: the `email` and `phone_number` can be null.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.TeacherApi();

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
apiInstance.teachersGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 

### Return type

[**TeacherListResponse**](TeacherListResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="teachersIdGet"></a>
# **teachersIdGet**
> TeacherResponse teachersIdGet(id)

Gets information for a teacher

Note : only users with the role `administrator` should be able to access this route. Warning: the `email` and `phone_number` can be null.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.TeacherApi();

var id = 56; // Number | Teacher ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teachersIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Teacher ID | 

### Return type

[**TeacherResponse**](TeacherResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="teachersIdOccupanciesGet"></a>
# **teachersIdOccupanciesGet**
> Occupancies teachersIdOccupanciesGet(id, opts)

Gets the occupancies of a teacher for the given time period.

Note : only users with the role `administrator`, or teachers whose id match the one in the URL should be able to access this route.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.TeacherApi();

var id = 56; // Number | Teacher ID

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
apiInstance.teachersIdOccupanciesGet(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Teacher ID | 
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

<a name="teachersIdPut"></a>
# **teachersIdPut**
> SimpleSuccessResponse teachersIdPut(id, teacherUpdateRequest)

Updates information for a teacher.

Note : only users with the role `administrator` should be able to access this route. Only filled fields should be updated. To remove the `phone_number` or `email` fields, pass `null`.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.TeacherApi();

var id = 56; // Number | Teacher ID

var teacherUpdateRequest = new Scolendar.TeacherUpdateRequest(); // TeacherUpdateRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teachersIdPut(id, teacherUpdateRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Teacher ID | 
 **teacherUpdateRequest** | [**TeacherUpdateRequest**](TeacherUpdateRequest.md)|  | 

### Return type

[**SimpleSuccessResponse**](SimpleSuccessResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="teachersIdSubjectsGet"></a>
# **teachersIdSubjectsGet**
> TeacherSubjects teachersIdSubjectsGet(id)

Gets the list of all subjects that a teacher participates in.

Note : only teachers whose id match the one in the URL should be able to access this route.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.TeacherApi();

var id = 56; // Number | Teacher ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teachersIdSubjectsGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Teacher ID | 

### Return type

[**TeacherSubjects**](TeacherSubjects.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="teachersPost"></a>
# **teachersPost**
> AccountCreatedResponse teachersPost(teacherCreationRequest)

Creates a new teacher.

Note : only users with the role `administrator` should be able to access this route. `email` and `phone_number` can be null in the request.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.TeacherApi();

var teacherCreationRequest = new Scolendar.TeacherCreationRequest(); // TeacherCreationRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teachersPost(teacherCreationRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teacherCreationRequest** | [**TeacherCreationRequest**](TeacherCreationRequest.md)|  | 

### Return type

[**AccountCreatedResponse**](AccountCreatedResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

