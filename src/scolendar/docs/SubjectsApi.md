# Scolendar.SubjectsApi

All URIs are relative to *http://localhost:3030/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subjectsDelete**](SubjectsApi.md#subjectsDelete) | **DELETE** /subjects | Deletes the given subjects using their IDs.
[**subjectsGet**](SubjectsApi.md#subjectsGet) | **GET** /subjects | Returns a paginated list of all subjects.
[**subjectsIdGet**](SubjectsApi.md#subjectsIdGet) | **GET** /subjects/{id} | Gets information on a subject
[**subjectsIdGroupsDelete**](SubjectsApi.md#subjectsIdGroupsDelete) | **DELETE** /subjects/{id}/groups | Removes a group from a subject.
[**subjectsIdGroupsPost**](SubjectsApi.md#subjectsIdGroupsPost) | **POST** /subjects/{id}/groups | Adds a new group to a subject.
[**subjectsIdOccupanciesGet**](SubjectsApi.md#subjectsIdOccupanciesGet) | **GET** /subjects/{id}/occupancies | Gets the occupancies of a subject for the given time period.
[**subjectsIdPut**](SubjectsApi.md#subjectsIdPut) | **PUT** /subjects/{id} | Updates information for a subject.
[**subjectsIdTeachersDelete**](SubjectsApi.md#subjectsIdTeachersDelete) | **DELETE** /subjects/{id}/teachers | Removes teachers from a subject using their IDs.
[**subjectsIdTeachersPost**](SubjectsApi.md#subjectsIdTeachersPost) | **POST** /subjects/{id}/teachers | Adds new teachers to a subject using their IDs.
[**subjectsPost**](SubjectsApi.md#subjectsPost) | **POST** /subjects | Creates a new subject.


<a name="subjectsDelete"></a>
# **subjectsDelete**
> SimpleSuccessResponse subjectsDelete(iDRequest)

Deletes the given subjects using their IDs.

Note : only users with the role `administrator` should be able to access this route. This request should be denied if the subject is used in any occupancy (be it directly, or via a group).

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.SubjectsApi();

var iDRequest = new Scolendar.IDRequest(); // IDRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subjectsDelete(iDRequest, callback);
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

<a name="subjectsGet"></a>
# **subjectsGet**
> SubjectListResponse subjectsGet(opts)

Returns a paginated list of all subjects.

Note : only users with the role `administrator` should be able to access this route. 10 subjects should be returned per page. At least three characters should be provided for the search, or the results won't be filtered.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.SubjectsApi();

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
apiInstance.subjectsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 

### Return type

[**SubjectListResponse**](SubjectListResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="subjectsIdGet"></a>
# **subjectsIdGet**
> SubjectResponse subjectsIdGet(id)

Gets information on a subject

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

var apiInstance = new Scolendar.SubjectsApi();

var id = 56; // Number | Subject ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subjectsIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Subject ID | 

### Return type

[**SubjectResponse**](SubjectResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="subjectsIdGroupsDelete"></a>
# **subjectsIdGroupsDelete**
> SimpleSuccessResponse subjectsIdGroupsDelete(id)

Removes a group from a subject.

Note : only users with the role `administrator` should be able to access this route. This should trigger the re-organisation of groups. This request should be denied if there is less than one group in the subject.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.SubjectsApi();

var id = 56; // Number | Subject ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subjectsIdGroupsDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Subject ID | 

### Return type

[**SimpleSuccessResponse**](SimpleSuccessResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="subjectsIdGroupsPost"></a>
# **subjectsIdGroupsPost**
> SimpleSuccessResponse subjectsIdGroupsPost(id)

Adds a new group to a subject.

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

var apiInstance = new Scolendar.SubjectsApi();

var id = 56; // Number | Subject ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subjectsIdGroupsPost(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Subject ID | 

### Return type

[**SimpleSuccessResponse**](SimpleSuccessResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="subjectsIdOccupanciesGet"></a>
# **subjectsIdOccupanciesGet**
> Occupancies subjectsIdOccupanciesGet(id, opts)

Gets the occupancies of a subject for the given time period.

Note : only users with the role `administrator`, or professors who are a teacher of the subject should be able to access this route.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.SubjectsApi();

var id = 56; // Number | Subject ID

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
apiInstance.subjectsIdOccupanciesGet(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Subject ID | 
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

<a name="subjectsIdPut"></a>
# **subjectsIdPut**
> SimpleSuccessResponse subjectsIdPut(id, subjectUpdateRequest)

Updates information for a subject.

Note : only users with the role `administrator` should be able to access this route. The teacher designed by teacher_in_charge_id should already be a teacher of that subject.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.SubjectsApi();

var id = 56; // Number | Subject ID

var subjectUpdateRequest = new Scolendar.SubjectUpdateRequest(); // SubjectUpdateRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subjectsIdPut(id, subjectUpdateRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Subject ID | 
 **subjectUpdateRequest** | [**SubjectUpdateRequest**](SubjectUpdateRequest.md)|  | 

### Return type

[**SimpleSuccessResponse**](SimpleSuccessResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="subjectsIdTeachersDelete"></a>
# **subjectsIdTeachersDelete**
> SimpleSuccessResponse subjectsIdTeachersDelete(id, iDRequest)

Removes teachers from a subject using their IDs.

Note : only users with the role `administrator` should be able to access this route. This request should be denied if there is less than one teacher in the subject, or if the teacher is in charge.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.SubjectsApi();

var id = 56; // Number | Subject ID

var iDRequest = new Scolendar.IDRequest(); // IDRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subjectsIdTeachersDelete(id, iDRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Subject ID | 
 **iDRequest** | [**IDRequest**](IDRequest.md)|  | 

### Return type

[**SimpleSuccessResponse**](SimpleSuccessResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="subjectsIdTeachersPost"></a>
# **subjectsIdTeachersPost**
> SimpleSuccessResponse subjectsIdTeachersPost(id, iDRequest)

Adds new teachers to a subject using their IDs.

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

var apiInstance = new Scolendar.SubjectsApi();

var id = 56; // Number | Subject ID

var iDRequest = new Scolendar.IDRequest(); // IDRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subjectsIdTeachersPost(id, iDRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Subject ID | 
 **iDRequest** | [**IDRequest**](IDRequest.md)|  | 

### Return type

[**SimpleSuccessResponse**](SimpleSuccessResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="subjectsPost"></a>
# **subjectsPost**
> SimpleSuccessResponse subjectsPost(subjectCreationRequest)

Creates a new subject.

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

var apiInstance = new Scolendar.SubjectsApi();

var subjectCreationRequest = new Scolendar.Subject(); // Subject | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subjectsPost(subjectCreationRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subjectCreationRequest** | [**Subject**](Subject.md)|  | 

### Return type

[**SimpleSuccessResponse**](SimpleSuccessResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

