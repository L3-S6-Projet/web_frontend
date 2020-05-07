# Scolendar.AuthApi

All URIs are relative to *http://localhost:3030/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](AuthApi.md#login) | **POST** /session | Logins the user to the application, returning a new auth token and the user role.
[**logout**](AuthApi.md#logout) | **DELETE** /session | Destroys the given auth token.


<a name="login"></a>
# **login**
> SuccessfulLoginResponse login(loginRequest)

Logins the user to the application, returning a new auth token and the user role.

### Example
```javascript
var Scolendar = require('scolendar');

var apiInstance = new Scolendar.AuthApi();

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

var apiInstance = new Scolendar.AuthApi();

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

