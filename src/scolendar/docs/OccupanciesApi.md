# Scolendar.OccupanciesApi

All URIs are relative to *http://localhost:3030/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**occupanciesGet**](OccupanciesApi.md#occupanciesGet) | **GET** /occupancies | Gets all the occupancies for the given time period.
[**occupanciesIdDelete**](OccupanciesApi.md#occupanciesIdDelete) | **DELETE** /occupancies/{id} | Removes occupancies from a subject using their IDs.
[**occupanciesIdPut**](OccupanciesApi.md#occupanciesIdPut) | **PUT** /occupancies/{id} | Update an occupancy for a given subject.


<a name="occupanciesGet"></a>
# **occupanciesGet**
> Occupancies occupanciesGet(opts)

Gets all the occupancies for the given time period.

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

var apiInstance = new Scolendar.OccupanciesApi();

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
apiInstance.occupanciesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

<a name="occupanciesIdDelete"></a>
# **occupanciesIdDelete**
> SimpleSuccessResponse occupanciesIdDelete(id)

Removes occupancies from a subject using their IDs.

Note : only administrators and professors who are a teacher of the subject should be able to access this route.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.OccupanciesApi();

var id = 56; // Number | Occupancy ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.occupanciesIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Occupancy ID | 

### Return type

[**SimpleSuccessResponse**](SimpleSuccessResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="occupanciesIdPut"></a>
# **occupanciesIdPut**
> SimpleSuccessResponse occupanciesIdPut(id, occupanciesUpdateRequest)

Update an occupancy for a given subject.

Note : only administrators and professors who are a teacher of the subject should be able to access this route. Only classrooms that are free should be accepted. Only classes that are not (any of their groups too) in any classes at the specified time should be accepted. Only filled fields should be updated.You can't change the assigned group, or the assigned type, or the assigned subject, or the assigned teacher.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.OccupanciesApi();

var id = 56; // Number | Occupancy ID

var occupanciesUpdateRequest = new Scolendar.OccupanciesUpdateRequest(); // OccupanciesUpdateRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.occupanciesIdPut(id, occupanciesUpdateRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Occupancy ID | 
 **occupanciesUpdateRequest** | [**OccupanciesUpdateRequest**](OccupanciesUpdateRequest.md)|  | 

### Return type

[**SimpleSuccessResponse**](SimpleSuccessResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

