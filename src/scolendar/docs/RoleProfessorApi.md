# Scolendar.RoleProfessorApi

All URIs are relative to *http://localhost:3030/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**classroomsGet**](RoleProfessorApi.md#classroomsGet) | **GET** /classrooms | Returns a paginated list of all classrooms.
[**login**](RoleProfessorApi.md#login) | **POST** /session | Logins the user to the application, returning a new auth token and the user role.
[**logout**](RoleProfessorApi.md#logout) | **DELETE** /session | Destroys the given auth token.
[**occupanciesIdDelete**](RoleProfessorApi.md#occupanciesIdDelete) | **DELETE** /occupancies/{id} | Removes occupancies from a subject using their IDs.
[**occupanciesIdPut**](RoleProfessorApi.md#occupanciesIdPut) | **PUT** /occupancies/{id} | Update an occupancy for a given subject.
[**profileFeedsIcalGet**](RoleProfessorApi.md#profileFeedsIcalGet) | **GET** /profile/feeds/ical | Gets the url to the ICAL feed of the user calendar.
[**profileLastOccupanciesModificationsGet**](RoleProfessorApi.md#profileLastOccupanciesModificationsGet) | **GET** /profile/last-occupancies-modifications | Returns a list of all recent occupancies modifications that are relevant to the user.
[**profilePut**](RoleProfessorApi.md#profilePut) | **PUT** /profile | Updates the user model.
[**subjectsIdGroupsGroupNumberOccupanciesGet**](RoleProfessorApi.md#subjectsIdGroupsGroupNumberOccupanciesGet) | **GET** /subjects/{id}/groups/{group_number}/occupancies | Gets the occupancies of a subject for the given time period.
[**subjectsIdGroupsGroupNumberOccupanciesPost**](RoleProfessorApi.md#subjectsIdGroupsGroupNumberOccupanciesPost) | **POST** /subjects/{id}/groups/{group_number}/occupancies | Creates a new occupancy for a given group of a subject.
[**subjectsIdOccupanciesGet**](RoleProfessorApi.md#subjectsIdOccupanciesGet) | **GET** /subjects/{id}/occupancies | Gets the occupancies of a subject for the given time period.
[**subjectsIdOccupanciesPost**](RoleProfessorApi.md#subjectsIdOccupanciesPost) | **POST** /subjects/{id}/occupancies | Creates a new occupancy for a given subject.
[**teachersIdOccupanciesGet**](RoleProfessorApi.md#teachersIdOccupanciesGet) | **GET** /teachers/{id}/occupancies | Gets the occupancies of a teacher for the given time period.
[**teachersIdSubjectsGet**](RoleProfessorApi.md#teachersIdSubjectsGet) | **GET** /teachers/{id}/subjects | Gets the list of all subjects that a teacher participates in.


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

var apiInstance = new Scolendar.RoleProfessorApi();

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

<a name="login"></a>
# **login**
> SuccessfulLoginResponse login(loginRequest)

Logins the user to the application, returning a new auth token and the user role.

### Example
```javascript
var Scolendar = require('scolendar');

var apiInstance = new Scolendar.RoleProfessorApi();

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

var apiInstance = new Scolendar.RoleProfessorApi();

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

var apiInstance = new Scolendar.RoleProfessorApi();

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

var apiInstance = new Scolendar.RoleProfessorApi();

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

var apiInstance = new Scolendar.RoleProfessorApi();

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

var apiInstance = new Scolendar.RoleProfessorApi();

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

var apiInstance = new Scolendar.RoleProfessorApi();

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

<a name="subjectsIdGroupsGroupNumberOccupanciesGet"></a>
# **subjectsIdGroupsGroupNumberOccupanciesGet**
> Occupancies subjectsIdGroupsGroupNumberOccupanciesGet(id, groupNumber, opts)

Gets the occupancies of a subject for the given time period.

Note : only professors who are a teacher of the subject should be able to access this route.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.RoleProfessorApi();

var id = 56; // Number | Subject ID

var groupNumber = 56; // Number | Group number

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
apiInstance.subjectsIdGroupsGroupNumberOccupanciesGet(id, groupNumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Subject ID | 
 **groupNumber** | **Number**| Group number | 
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

<a name="subjectsIdGroupsGroupNumberOccupanciesPost"></a>
# **subjectsIdGroupsGroupNumberOccupanciesPost**
> SimpleSuccessResponse subjectsIdGroupsGroupNumberOccupanciesPost(id, groupNumber, occupanciesCreationRequest)

Creates a new occupancy for a given group of a subject.

Note : only professors who are a teacher of the subject should be able to access this route. The only accepted occupancy types should be `td` and `tp`. The classroom id should **NOT** be nullable. Only classrooms that are free should be accepted. Only groups that are not (and their class too) in any classes at the specified time should be accepted.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.RoleProfessorApi();

var id = 56; // Number | Subject ID

var groupNumber = 56; // Number | Group Number

var occupanciesCreationRequest = new Scolendar.OccupanciesCreationRequest(); // OccupanciesCreationRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subjectsIdGroupsGroupNumberOccupanciesPost(id, groupNumber, occupanciesCreationRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Subject ID | 
 **groupNumber** | **Number**| Group Number | 
 **occupanciesCreationRequest** | [**OccupanciesCreationRequest**](OccupanciesCreationRequest.md)|  | 

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

var apiInstance = new Scolendar.RoleProfessorApi();

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

<a name="subjectsIdOccupanciesPost"></a>
# **subjectsIdOccupanciesPost**
> SimpleSuccessResponse subjectsIdOccupanciesPost(id, occupanciesCreationRequest)

Creates a new occupancy for a given subject.

Note : only professors who are a teacher of the subject should be able to access this route. The occupancy types `td` and `tp` should be rejected. Only classrooms that are free should be accepted. Only classes that are not (any of their groups too) in any classes at the specified time should be accepted.

### Example
```javascript
var Scolendar = require('scolendar');
var defaultClient = Scolendar.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new Scolendar.RoleProfessorApi();

var id = 56; // Number | Subject ID

var occupanciesCreationRequest = new Scolendar.OccupanciesCreationRequest(); // OccupanciesCreationRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subjectsIdOccupanciesPost(id, occupanciesCreationRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Subject ID | 
 **occupanciesCreationRequest** | [**OccupanciesCreationRequest**](OccupanciesCreationRequest.md)|  | 

### Return type

[**SimpleSuccessResponse**](SimpleSuccessResponse.md)

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

var apiInstance = new Scolendar.RoleProfessorApi();

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

var apiInstance = new Scolendar.RoleProfessorApi();

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

