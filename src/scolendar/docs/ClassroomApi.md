# Scolendar.ClassroomApi

All URIs are relative to *http://localhost:3030/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**classroomsDelete**](ClassroomApi.md#classroomsDelete) | **DELETE** /classrooms | Deletes the given classrooms using their IDs.
[**classroomsGet**](ClassroomApi.md#classroomsGet) | **GET** /classrooms | Returns a paginated list of all classrooms.
[**classroomsIdGet**](ClassroomApi.md#classroomsIdGet) | **GET** /classrooms/{id} | Gets information for a classroom.
[**classroomsIdOccupanciesGet**](ClassroomApi.md#classroomsIdOccupanciesGet) | **GET** /classrooms/{id}/occupancies | Gets the occupancies of a classroom for the given time period.
[**classroomsIdPut**](ClassroomApi.md#classroomsIdPut) | **PUT** /classrooms/{id} | Updates information for a classroom.
[**classroomsPost**](ClassroomApi.md#classroomsPost) | **POST** /classrooms | Creates a new classroom.


<a name="classroomsDelete"></a>
# **classroomsDelete**
> SimpleSuccessResponse classroomsDelete(iDRequest)

Deletes the given classrooms using their IDs.

Note : only users with the role `administrator` should be able to access this route. This request should be denied if the classroom is used in any occupancy.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.ClassroomApi();

var iDRequest = new Scolendar.IDRequest(); // IDRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.classroomsDelete(iDRequest, callback);
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

<a name="classroomsGet"></a>
# **classroomsGet**
> ClassroomsList classroomsGet(opts)

Returns a paginated list of all classrooms.

Note : only users with the role `administrator`, or professors, should be able to access this route. 10 classrooms should be returned per page. If less than three characters are provided for the query, it will not be applied.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.ClassroomApi();

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
apiInstance.classroomsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 

### Return type

[**ClassroomsList**](ClassroomsList.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="classroomsIdGet"></a>
# **classroomsIdGet**
> ClassroomGetResponse classroomsIdGet(id)

Gets information for a classroom.

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

var apiInstance = new Scolendar.ClassroomApi();

var id = 56; // Number | Classroom ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.classroomsIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Classroom ID | 

### Return type

[**ClassroomGetResponse**](ClassroomGetResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="classroomsIdOccupanciesGet"></a>
# **classroomsIdOccupanciesGet**
> Occupancies classroomsIdOccupanciesGet(id, opts)

Gets the occupancies of a classroom for the given time period.

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

var apiInstance = new Scolendar.ClassroomApi();

var id = 56; // Number | Classroom ID

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
apiInstance.classroomsIdOccupanciesGet(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Classroom ID | 
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

<a name="classroomsIdPut"></a>
# **classroomsIdPut**
> SimpleSuccessResponse classroomsIdPut(id, classroomUpdateRequest)

Updates information for a classroom.

Note : only users with the role `administrator` should be able to access this route. The omission of the `capacity` field is not an error : it should not be able to be modified.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.ClassroomApi();

var id = 56; // Number | Classroom ID

var classroomUpdateRequest = new Scolendar.ClassroomUpdateRequest(); // ClassroomUpdateRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.classroomsIdPut(id, classroomUpdateRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Classroom ID | 
 **classroomUpdateRequest** | [**ClassroomUpdateRequest**](ClassroomUpdateRequest.md)|  | 

### Return type

[**SimpleSuccessResponse**](SimpleSuccessResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="classroomsPost"></a>
# **classroomsPost**
> SimpleSuccessResponse classroomsPost(classroomCreationRequest)

Creates a new classroom.

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

var apiInstance = new Scolendar.ClassroomApi();

var classroomCreationRequest = new Scolendar.ClassroomCreationRequest(); // ClassroomCreationRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.classroomsPost(classroomCreationRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classroomCreationRequest** | [**ClassroomCreationRequest**](ClassroomCreationRequest.md)|  | 

### Return type

[**SimpleSuccessResponse**](SimpleSuccessResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

