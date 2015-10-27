(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createMany
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Kitten
 * @header lbServices.Kitten
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Kitten` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Kitten",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/kittens/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Kitten.kittenGroomers.findById() instead.
        "prototype$__findById__kittenGroomers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/kittens/:id/kittenGroomers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Kitten.kittenGroomers.destroyById() instead.
        "prototype$__destroyById__kittenGroomers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/kittens/:id/kittenGroomers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Kitten.kittenGroomers.updateById() instead.
        "prototype$__updateById__kittenGroomers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/kittens/:id/kittenGroomers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Kitten.kittenGroomers.link() instead.
        "prototype$__link__kittenGroomers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/kittens/:id/kittenGroomers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Kitten.kittenGroomers.unlink() instead.
        "prototype$__unlink__kittenGroomers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/kittens/:id/kittenGroomers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Kitten.kittenGroomers.exists() instead.
        "prototype$__exists__kittenGroomers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/kittens/:id/kittenGroomers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Kitten.kittenTags.findById() instead.
        "prototype$__findById__kittenTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/kittens/:id/kittenTags/:fk",
          method: "GET"
        },

        // INTERNAL. Use Kitten.kittenTags.destroyById() instead.
        "prototype$__destroyById__kittenTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/kittens/:id/kittenTags/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Kitten.kittenTags.updateById() instead.
        "prototype$__updateById__kittenTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/kittens/:id/kittenTags/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Kitten.kittenBirthplace() instead.
        "prototype$__get__kittenBirthplace": {
          url: urlBase + "/kittens/:id/kittenBirthplace",
          method: "GET"
        },

        // INTERNAL. Use Kitten.kittenBirthplace.create() instead.
        "prototype$__create__kittenBirthplace": {
          url: urlBase + "/kittens/:id/kittenBirthplace",
          method: "POST"
        },

        // INTERNAL. Use Kitten.kittenBirthplace.update() instead.
        "prototype$__update__kittenBirthplace": {
          url: urlBase + "/kittens/:id/kittenBirthplace",
          method: "PUT"
        },

        // INTERNAL. Use Kitten.kittenBirthplace.destroy() instead.
        "prototype$__destroy__kittenBirthplace": {
          url: urlBase + "/kittens/:id/kittenBirthplace",
          method: "DELETE"
        },

        // INTERNAL. Use Kitten.kittenGroomers() instead.
        "prototype$__get__kittenGroomers": {
          isArray: true,
          url: urlBase + "/kittens/:id/kittenGroomers",
          method: "GET"
        },

        // INTERNAL. Use Kitten.kittenGroomers.create() instead.
        "prototype$__create__kittenGroomers": {
          url: urlBase + "/kittens/:id/kittenGroomers",
          method: "POST"
        },

        // INTERNAL. Use Kitten.kittenGroomers.destroyAll() instead.
        "prototype$__delete__kittenGroomers": {
          url: urlBase + "/kittens/:id/kittenGroomers",
          method: "DELETE"
        },

        // INTERNAL. Use Kitten.kittenGroomers.count() instead.
        "prototype$__count__kittenGroomers": {
          url: urlBase + "/kittens/:id/kittenGroomers/count",
          method: "GET"
        },

        // INTERNAL. Use Kitten.kittenTags() instead.
        "prototype$__get__kittenTags": {
          isArray: true,
          url: urlBase + "/kittens/:id/kittenTags",
          method: "GET"
        },

        // INTERNAL. Use Kitten.kittenTags.create() instead.
        "prototype$__create__kittenTags": {
          url: urlBase + "/kittens/:id/kittenTags",
          method: "POST"
        },

        // INTERNAL. Use Kitten.kittenTags.destroyAll() instead.
        "prototype$__delete__kittenTags": {
          url: urlBase + "/kittens/:id/kittenTags",
          method: "DELETE"
        },

        // INTERNAL. Use Kitten.kittenTags.count() instead.
        "prototype$__count__kittenTags": {
          url: urlBase + "/kittens/:id/kittenTags/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Kitten#create
         * @methodOf lbServices.Kitten
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Kitten` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/kittens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Kitten#createMany
         * @methodOf lbServices.Kitten
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Kitten` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/kittens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Kitten#upsert
         * @methodOf lbServices.Kitten
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Kitten` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/kittens",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Kitten#exists
         * @methodOf lbServices.Kitten
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/kittens/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Kitten#findById
         * @methodOf lbServices.Kitten
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Kitten` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/kittens/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Kitten#find
         * @methodOf lbServices.Kitten
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Kitten` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/kittens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Kitten#findOne
         * @methodOf lbServices.Kitten
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Kitten` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/kittens/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Kitten#updateAll
         * @methodOf lbServices.Kitten
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/kittens/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Kitten#deleteById
         * @methodOf lbServices.Kitten
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/kittens/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Kitten#count
         * @methodOf lbServices.Kitten
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/kittens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Kitten#prototype$updateAttributes
         * @methodOf lbServices.Kitten
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Kitten` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/kittens/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Kitten#createChangeStream
         * @methodOf lbServices.Kitten
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/kittens/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Groomer.groomerKittens.findById() instead.
        "::findById::groomer::groomerKittens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groomers/:id/groomerKittens/:fk",
          method: "GET"
        },

        // INTERNAL. Use Groomer.groomerKittens.destroyById() instead.
        "::destroyById::groomer::groomerKittens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groomers/:id/groomerKittens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Groomer.groomerKittens.updateById() instead.
        "::updateById::groomer::groomerKittens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groomers/:id/groomerKittens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Groomer.groomerKittens.link() instead.
        "::link::groomer::groomerKittens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groomers/:id/groomerKittens/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Groomer.groomerKittens.unlink() instead.
        "::unlink::groomer::groomerKittens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groomers/:id/groomerKittens/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Groomer.groomerKittens.exists() instead.
        "::exists::groomer::groomerKittens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groomers/:id/groomerKittens/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Groomer.groomerKittens() instead.
        "::get::groomer::groomerKittens": {
          isArray: true,
          url: urlBase + "/groomers/:id/groomerKittens",
          method: "GET"
        },

        // INTERNAL. Use Groomer.groomerKittens.create() instead.
        "::create::groomer::groomerKittens": {
          url: urlBase + "/groomers/:id/groomerKittens",
          method: "POST"
        },

        // INTERNAL. Use Groomer.groomerKittens.createMany() instead.
        "::createMany::groomer::groomerKittens": {
          isArray: true,
          url: urlBase + "/groomers/:id/groomerKittens",
          method: "POST"
        },

        // INTERNAL. Use Groomer.groomerKittens.destroyAll() instead.
        "::delete::groomer::groomerKittens": {
          url: urlBase + "/groomers/:id/groomerKittens",
          method: "DELETE"
        },

        // INTERNAL. Use Groomer.groomerKittens.count() instead.
        "::count::groomer::groomerKittens": {
          url: urlBase + "/groomers/:id/groomerKittens/count",
          method: "GET"
        },

        // INTERNAL. Use Tag.tagKitten() instead.
        "::get::tag::tagKitten": {
          url: urlBase + "/tags/:id/tagKitten",
          method: "GET"
        },

        // INTERNAL. Use Birthplace.birthplaceKittens.findById() instead.
        "::findById::birthplace::birthplaceKittens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/birthplaces/:id/birthplaceKittens/:fk",
          method: "GET"
        },

        // INTERNAL. Use Birthplace.birthplaceKittens.destroyById() instead.
        "::destroyById::birthplace::birthplaceKittens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/birthplaces/:id/birthplaceKittens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Birthplace.birthplaceKittens.updateById() instead.
        "::updateById::birthplace::birthplaceKittens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/birthplaces/:id/birthplaceKittens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Birthplace.birthplaceKittens() instead.
        "::get::birthplace::birthplaceKittens": {
          isArray: true,
          url: urlBase + "/birthplaces/:id/birthplaceKittens",
          method: "GET"
        },

        // INTERNAL. Use Birthplace.birthplaceKittens.create() instead.
        "::create::birthplace::birthplaceKittens": {
          url: urlBase + "/birthplaces/:id/birthplaceKittens",
          method: "POST"
        },

        // INTERNAL. Use Birthplace.birthplaceKittens.createMany() instead.
        "::createMany::birthplace::birthplaceKittens": {
          isArray: true,
          url: urlBase + "/birthplaces/:id/birthplaceKittens",
          method: "POST"
        },

        // INTERNAL. Use Birthplace.birthplaceKittens.destroyAll() instead.
        "::delete::birthplace::birthplaceKittens": {
          url: urlBase + "/birthplaces/:id/birthplaceKittens",
          method: "DELETE"
        },

        // INTERNAL. Use Birthplace.birthplaceKittens.count() instead.
        "::count::birthplace::birthplaceKittens": {
          url: urlBase + "/birthplaces/:id/birthplaceKittens/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Kitten#updateOrCreate
         * @methodOf lbServices.Kitten
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Kitten` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Kitten#update
         * @methodOf lbServices.Kitten
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Kitten#destroyById
         * @methodOf lbServices.Kitten
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Kitten#removeById
         * @methodOf lbServices.Kitten
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Kitten#modelName
    * @propertyOf lbServices.Kitten
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Kitten`.
    */
    R.modelName = "Kitten";

    /**
     * @ngdoc object
     * @name lbServices.Kitten.kittenGroomers
     * @header lbServices.Kitten.kittenGroomers
     * @object
     * @description
     *
     * The object `Kitten.kittenGroomers` groups methods
     * manipulating `Groomer` instances related to `Kitten`.
     *
     * Call {@link lbServices.Kitten#kittenGroomers Kitten.kittenGroomers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Kitten#kittenGroomers
         * @methodOf lbServices.Kitten
         *
         * @description
         *
         * Queries kittenGroomers of kitten.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Groomer` object.)
         * </em>
         */
        R.kittenGroomers = function() {
          var TargetResource = $injector.get("Groomer");
          var action = TargetResource["::get::kitten::kittenGroomers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Kitten.kittenGroomers#count
         * @methodOf lbServices.Kitten.kittenGroomers
         *
         * @description
         *
         * Counts kittenGroomers of kitten.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.kittenGroomers.count = function() {
          var TargetResource = $injector.get("Groomer");
          var action = TargetResource["::count::kitten::kittenGroomers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Kitten.kittenGroomers#create
         * @methodOf lbServices.Kitten.kittenGroomers
         *
         * @description
         *
         * Creates a new instance in kittenGroomers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Groomer` object.)
         * </em>
         */
        R.kittenGroomers.create = function() {
          var TargetResource = $injector.get("Groomer");
          var action = TargetResource["::create::kitten::kittenGroomers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Kitten.kittenGroomers#createMany
         * @methodOf lbServices.Kitten.kittenGroomers
         *
         * @description
         *
         * Creates a new instance in kittenGroomers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Groomer` object.)
         * </em>
         */
        R.kittenGroomers.createMany = function() {
          var TargetResource = $injector.get("Groomer");
          var action = TargetResource["::createMany::kitten::kittenGroomers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Kitten.kittenGroomers#destroyAll
         * @methodOf lbServices.Kitten.kittenGroomers
         *
         * @description
         *
         * Deletes all kittenGroomers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.kittenGroomers.destroyAll = function() {
          var TargetResource = $injector.get("Groomer");
          var action = TargetResource["::delete::kitten::kittenGroomers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Kitten.kittenGroomers#destroyById
         * @methodOf lbServices.Kitten.kittenGroomers
         *
         * @description
         *
         * Delete a related item by id for kittenGroomers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for kittenGroomers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.kittenGroomers.destroyById = function() {
          var TargetResource = $injector.get("Groomer");
          var action = TargetResource["::destroyById::kitten::kittenGroomers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Kitten.kittenGroomers#exists
         * @methodOf lbServices.Kitten.kittenGroomers
         *
         * @description
         *
         * Check the existence of kittenGroomers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for kittenGroomers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Groomer` object.)
         * </em>
         */
        R.kittenGroomers.exists = function() {
          var TargetResource = $injector.get("Groomer");
          var action = TargetResource["::exists::kitten::kittenGroomers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Kitten.kittenGroomers#findById
         * @methodOf lbServices.Kitten.kittenGroomers
         *
         * @description
         *
         * Find a related item by id for kittenGroomers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for kittenGroomers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Groomer` object.)
         * </em>
         */
        R.kittenGroomers.findById = function() {
          var TargetResource = $injector.get("Groomer");
          var action = TargetResource["::findById::kitten::kittenGroomers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Kitten.kittenGroomers#link
         * @methodOf lbServices.Kitten.kittenGroomers
         *
         * @description
         *
         * Add a related item by id for kittenGroomers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for kittenGroomers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Groomer` object.)
         * </em>
         */
        R.kittenGroomers.link = function() {
          var TargetResource = $injector.get("Groomer");
          var action = TargetResource["::link::kitten::kittenGroomers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Kitten.kittenGroomers#unlink
         * @methodOf lbServices.Kitten.kittenGroomers
         *
         * @description
         *
         * Remove the kittenGroomers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for kittenGroomers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.kittenGroomers.unlink = function() {
          var TargetResource = $injector.get("Groomer");
          var action = TargetResource["::unlink::kitten::kittenGroomers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Kitten.kittenGroomers#updateById
         * @methodOf lbServices.Kitten.kittenGroomers
         *
         * @description
         *
         * Update a related item by id for kittenGroomers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for kittenGroomers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Groomer` object.)
         * </em>
         */
        R.kittenGroomers.updateById = function() {
          var TargetResource = $injector.get("Groomer");
          var action = TargetResource["::updateById::kitten::kittenGroomers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Kitten.kittenTags
     * @header lbServices.Kitten.kittenTags
     * @object
     * @description
     *
     * The object `Kitten.kittenTags` groups methods
     * manipulating `Tag` instances related to `Kitten`.
     *
     * Call {@link lbServices.Kitten#kittenTags Kitten.kittenTags()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Kitten#kittenTags
         * @methodOf lbServices.Kitten
         *
         * @description
         *
         * Queries kittenTags of kitten.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.kittenTags = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::get::kitten::kittenTags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Kitten.kittenTags#count
         * @methodOf lbServices.Kitten.kittenTags
         *
         * @description
         *
         * Counts kittenTags of kitten.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.kittenTags.count = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::count::kitten::kittenTags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Kitten.kittenTags#create
         * @methodOf lbServices.Kitten.kittenTags
         *
         * @description
         *
         * Creates a new instance in kittenTags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.kittenTags.create = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::create::kitten::kittenTags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Kitten.kittenTags#createMany
         * @methodOf lbServices.Kitten.kittenTags
         *
         * @description
         *
         * Creates a new instance in kittenTags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.kittenTags.createMany = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::createMany::kitten::kittenTags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Kitten.kittenTags#destroyAll
         * @methodOf lbServices.Kitten.kittenTags
         *
         * @description
         *
         * Deletes all kittenTags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.kittenTags.destroyAll = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::delete::kitten::kittenTags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Kitten.kittenTags#destroyById
         * @methodOf lbServices.Kitten.kittenTags
         *
         * @description
         *
         * Delete a related item by id for kittenTags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for kittenTags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.kittenTags.destroyById = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::destroyById::kitten::kittenTags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Kitten.kittenTags#findById
         * @methodOf lbServices.Kitten.kittenTags
         *
         * @description
         *
         * Find a related item by id for kittenTags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for kittenTags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.kittenTags.findById = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::findById::kitten::kittenTags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Kitten.kittenTags#updateById
         * @methodOf lbServices.Kitten.kittenTags
         *
         * @description
         *
         * Update a related item by id for kittenTags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for kittenTags
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.kittenTags.updateById = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::updateById::kitten::kittenTags"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Kitten.kittenBirthplace
     * @header lbServices.Kitten.kittenBirthplace
     * @object
     * @description
     *
     * The object `Kitten.kittenBirthplace` groups methods
     * manipulating `Birthplace` instances related to `Kitten`.
     *
     * Call {@link lbServices.Kitten#kittenBirthplace Kitten.kittenBirthplace()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Kitten#kittenBirthplace
         * @methodOf lbServices.Kitten
         *
         * @description
         *
         * Fetches hasOne relation kittenBirthplace.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Birthplace` object.)
         * </em>
         */
        R.kittenBirthplace = function() {
          var TargetResource = $injector.get("Birthplace");
          var action = TargetResource["::get::kitten::kittenBirthplace"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Kitten.kittenBirthplace#create
         * @methodOf lbServices.Kitten.kittenBirthplace
         *
         * @description
         *
         * Creates a new instance in kittenBirthplace of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Birthplace` object.)
         * </em>
         */
        R.kittenBirthplace.create = function() {
          var TargetResource = $injector.get("Birthplace");
          var action = TargetResource["::create::kitten::kittenBirthplace"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Kitten.kittenBirthplace#createMany
         * @methodOf lbServices.Kitten.kittenBirthplace
         *
         * @description
         *
         * Creates a new instance in kittenBirthplace of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Birthplace` object.)
         * </em>
         */
        R.kittenBirthplace.createMany = function() {
          var TargetResource = $injector.get("Birthplace");
          var action = TargetResource["::createMany::kitten::kittenBirthplace"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Kitten.kittenBirthplace#destroy
         * @methodOf lbServices.Kitten.kittenBirthplace
         *
         * @description
         *
         * Deletes kittenBirthplace of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.kittenBirthplace.destroy = function() {
          var TargetResource = $injector.get("Birthplace");
          var action = TargetResource["::destroy::kitten::kittenBirthplace"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Kitten.kittenBirthplace#update
         * @methodOf lbServices.Kitten.kittenBirthplace
         *
         * @description
         *
         * Update kittenBirthplace of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Birthplace` object.)
         * </em>
         */
        R.kittenBirthplace.update = function() {
          var TargetResource = $injector.get("Birthplace");
          var action = TargetResource["::update::kitten::kittenBirthplace"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Groomer
 * @header lbServices.Groomer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Groomer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Groomer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/groomers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Groomer.groomerKittens.findById() instead.
        "prototype$__findById__groomerKittens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groomers/:id/groomerKittens/:fk",
          method: "GET"
        },

        // INTERNAL. Use Groomer.groomerKittens.destroyById() instead.
        "prototype$__destroyById__groomerKittens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groomers/:id/groomerKittens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Groomer.groomerKittens.updateById() instead.
        "prototype$__updateById__groomerKittens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groomers/:id/groomerKittens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Groomer.groomerKittens.link() instead.
        "prototype$__link__groomerKittens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groomers/:id/groomerKittens/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Groomer.groomerKittens.unlink() instead.
        "prototype$__unlink__groomerKittens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groomers/:id/groomerKittens/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Groomer.groomerKittens.exists() instead.
        "prototype$__exists__groomerKittens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groomers/:id/groomerKittens/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Groomer.groomerKittens() instead.
        "prototype$__get__groomerKittens": {
          isArray: true,
          url: urlBase + "/groomers/:id/groomerKittens",
          method: "GET"
        },

        // INTERNAL. Use Groomer.groomerKittens.create() instead.
        "prototype$__create__groomerKittens": {
          url: urlBase + "/groomers/:id/groomerKittens",
          method: "POST"
        },

        // INTERNAL. Use Groomer.groomerKittens.destroyAll() instead.
        "prototype$__delete__groomerKittens": {
          url: urlBase + "/groomers/:id/groomerKittens",
          method: "DELETE"
        },

        // INTERNAL. Use Groomer.groomerKittens.count() instead.
        "prototype$__count__groomerKittens": {
          url: urlBase + "/groomers/:id/groomerKittens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Groomer#create
         * @methodOf lbServices.Groomer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Groomer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/groomers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Groomer#createMany
         * @methodOf lbServices.Groomer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Groomer` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/groomers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Groomer#upsert
         * @methodOf lbServices.Groomer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Groomer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/groomers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Groomer#exists
         * @methodOf lbServices.Groomer
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/groomers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Groomer#findById
         * @methodOf lbServices.Groomer
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Groomer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/groomers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Groomer#find
         * @methodOf lbServices.Groomer
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Groomer` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/groomers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Groomer#findOne
         * @methodOf lbServices.Groomer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Groomer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/groomers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Groomer#updateAll
         * @methodOf lbServices.Groomer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/groomers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Groomer#deleteById
         * @methodOf lbServices.Groomer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/groomers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Groomer#count
         * @methodOf lbServices.Groomer
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/groomers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Groomer#prototype$updateAttributes
         * @methodOf lbServices.Groomer
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Groomer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/groomers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Groomer#createChangeStream
         * @methodOf lbServices.Groomer
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/groomers/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Kitten.kittenGroomers.findById() instead.
        "::findById::kitten::kittenGroomers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/kittens/:id/kittenGroomers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Kitten.kittenGroomers.destroyById() instead.
        "::destroyById::kitten::kittenGroomers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/kittens/:id/kittenGroomers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Kitten.kittenGroomers.updateById() instead.
        "::updateById::kitten::kittenGroomers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/kittens/:id/kittenGroomers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Kitten.kittenGroomers.link() instead.
        "::link::kitten::kittenGroomers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/kittens/:id/kittenGroomers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Kitten.kittenGroomers.unlink() instead.
        "::unlink::kitten::kittenGroomers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/kittens/:id/kittenGroomers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Kitten.kittenGroomers.exists() instead.
        "::exists::kitten::kittenGroomers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/kittens/:id/kittenGroomers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Kitten.kittenGroomers() instead.
        "::get::kitten::kittenGroomers": {
          isArray: true,
          url: urlBase + "/kittens/:id/kittenGroomers",
          method: "GET"
        },

        // INTERNAL. Use Kitten.kittenGroomers.create() instead.
        "::create::kitten::kittenGroomers": {
          url: urlBase + "/kittens/:id/kittenGroomers",
          method: "POST"
        },

        // INTERNAL. Use Kitten.kittenGroomers.createMany() instead.
        "::createMany::kitten::kittenGroomers": {
          isArray: true,
          url: urlBase + "/kittens/:id/kittenGroomers",
          method: "POST"
        },

        // INTERNAL. Use Kitten.kittenGroomers.destroyAll() instead.
        "::delete::kitten::kittenGroomers": {
          url: urlBase + "/kittens/:id/kittenGroomers",
          method: "DELETE"
        },

        // INTERNAL. Use Kitten.kittenGroomers.count() instead.
        "::count::kitten::kittenGroomers": {
          url: urlBase + "/kittens/:id/kittenGroomers/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Groomer#updateOrCreate
         * @methodOf lbServices.Groomer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Groomer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Groomer#update
         * @methodOf lbServices.Groomer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Groomer#destroyById
         * @methodOf lbServices.Groomer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Groomer#removeById
         * @methodOf lbServices.Groomer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Groomer#modelName
    * @propertyOf lbServices.Groomer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Groomer`.
    */
    R.modelName = "Groomer";

    /**
     * @ngdoc object
     * @name lbServices.Groomer.groomerKittens
     * @header lbServices.Groomer.groomerKittens
     * @object
     * @description
     *
     * The object `Groomer.groomerKittens` groups methods
     * manipulating `Kitten` instances related to `Groomer`.
     *
     * Call {@link lbServices.Groomer#groomerKittens Groomer.groomerKittens()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Groomer#groomerKittens
         * @methodOf lbServices.Groomer
         *
         * @description
         *
         * Queries groomerKittens of groomer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Kitten` object.)
         * </em>
         */
        R.groomerKittens = function() {
          var TargetResource = $injector.get("Kitten");
          var action = TargetResource["::get::groomer::groomerKittens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Groomer.groomerKittens#count
         * @methodOf lbServices.Groomer.groomerKittens
         *
         * @description
         *
         * Counts groomerKittens of groomer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.groomerKittens.count = function() {
          var TargetResource = $injector.get("Kitten");
          var action = TargetResource["::count::groomer::groomerKittens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Groomer.groomerKittens#create
         * @methodOf lbServices.Groomer.groomerKittens
         *
         * @description
         *
         * Creates a new instance in groomerKittens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Kitten` object.)
         * </em>
         */
        R.groomerKittens.create = function() {
          var TargetResource = $injector.get("Kitten");
          var action = TargetResource["::create::groomer::groomerKittens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Groomer.groomerKittens#createMany
         * @methodOf lbServices.Groomer.groomerKittens
         *
         * @description
         *
         * Creates a new instance in groomerKittens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Kitten` object.)
         * </em>
         */
        R.groomerKittens.createMany = function() {
          var TargetResource = $injector.get("Kitten");
          var action = TargetResource["::createMany::groomer::groomerKittens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Groomer.groomerKittens#destroyAll
         * @methodOf lbServices.Groomer.groomerKittens
         *
         * @description
         *
         * Deletes all groomerKittens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.groomerKittens.destroyAll = function() {
          var TargetResource = $injector.get("Kitten");
          var action = TargetResource["::delete::groomer::groomerKittens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Groomer.groomerKittens#destroyById
         * @methodOf lbServices.Groomer.groomerKittens
         *
         * @description
         *
         * Delete a related item by id for groomerKittens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for groomerKittens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.groomerKittens.destroyById = function() {
          var TargetResource = $injector.get("Kitten");
          var action = TargetResource["::destroyById::groomer::groomerKittens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Groomer.groomerKittens#exists
         * @methodOf lbServices.Groomer.groomerKittens
         *
         * @description
         *
         * Check the existence of groomerKittens relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for groomerKittens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Kitten` object.)
         * </em>
         */
        R.groomerKittens.exists = function() {
          var TargetResource = $injector.get("Kitten");
          var action = TargetResource["::exists::groomer::groomerKittens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Groomer.groomerKittens#findById
         * @methodOf lbServices.Groomer.groomerKittens
         *
         * @description
         *
         * Find a related item by id for groomerKittens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for groomerKittens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Kitten` object.)
         * </em>
         */
        R.groomerKittens.findById = function() {
          var TargetResource = $injector.get("Kitten");
          var action = TargetResource["::findById::groomer::groomerKittens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Groomer.groomerKittens#link
         * @methodOf lbServices.Groomer.groomerKittens
         *
         * @description
         *
         * Add a related item by id for groomerKittens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for groomerKittens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Kitten` object.)
         * </em>
         */
        R.groomerKittens.link = function() {
          var TargetResource = $injector.get("Kitten");
          var action = TargetResource["::link::groomer::groomerKittens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Groomer.groomerKittens#unlink
         * @methodOf lbServices.Groomer.groomerKittens
         *
         * @description
         *
         * Remove the groomerKittens relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for groomerKittens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.groomerKittens.unlink = function() {
          var TargetResource = $injector.get("Kitten");
          var action = TargetResource["::unlink::groomer::groomerKittens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Groomer.groomerKittens#updateById
         * @methodOf lbServices.Groomer.groomerKittens
         *
         * @description
         *
         * Update a related item by id for groomerKittens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for groomerKittens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Kitten` object.)
         * </em>
         */
        R.groomerKittens.updateById = function() {
          var TargetResource = $injector.get("Kitten");
          var action = TargetResource["::updateById::groomer::groomerKittens"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Tag
 * @header lbServices.Tag
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Tag` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Tag",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/tags/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Tag.tagKitten() instead.
        "prototype$__get__tagKitten": {
          url: urlBase + "/tags/:id/tagKitten",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#create
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/tags",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#createMany
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/tags",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#upsert
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/tags",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#exists
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/tags/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#findById
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/tags/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#find
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/tags",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#findOne
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/tags/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#updateAll
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/tags/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#deleteById
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/tags/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#count
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/tags/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#prototype$updateAttributes
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/tags/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#createChangeStream
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/tags/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Kitten.kittenTags.findById() instead.
        "::findById::kitten::kittenTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/kittens/:id/kittenTags/:fk",
          method: "GET"
        },

        // INTERNAL. Use Kitten.kittenTags.destroyById() instead.
        "::destroyById::kitten::kittenTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/kittens/:id/kittenTags/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Kitten.kittenTags.updateById() instead.
        "::updateById::kitten::kittenTags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/kittens/:id/kittenTags/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Kitten.kittenTags() instead.
        "::get::kitten::kittenTags": {
          isArray: true,
          url: urlBase + "/kittens/:id/kittenTags",
          method: "GET"
        },

        // INTERNAL. Use Kitten.kittenTags.create() instead.
        "::create::kitten::kittenTags": {
          url: urlBase + "/kittens/:id/kittenTags",
          method: "POST"
        },

        // INTERNAL. Use Kitten.kittenTags.createMany() instead.
        "::createMany::kitten::kittenTags": {
          isArray: true,
          url: urlBase + "/kittens/:id/kittenTags",
          method: "POST"
        },

        // INTERNAL. Use Kitten.kittenTags.destroyAll() instead.
        "::delete::kitten::kittenTags": {
          url: urlBase + "/kittens/:id/kittenTags",
          method: "DELETE"
        },

        // INTERNAL. Use Kitten.kittenTags.count() instead.
        "::count::kitten::kittenTags": {
          url: urlBase + "/kittens/:id/kittenTags/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Tag#updateOrCreate
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Tag#update
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Tag#destroyById
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Tag#removeById
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Tag#modelName
    * @propertyOf lbServices.Tag
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Tag`.
    */
    R.modelName = "Tag";


        /**
         * @ngdoc method
         * @name lbServices.Tag#tagKitten
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Fetches belongsTo relation tagKitten.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Kitten` object.)
         * </em>
         */
        R.tagKitten = function() {
          var TargetResource = $injector.get("Kitten");
          var action = TargetResource["::get::tag::tagKitten"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Birthplace
 * @header lbServices.Birthplace
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Birthplace` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Birthplace",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/birthplaces/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Birthplace.birthplaceKittens.findById() instead.
        "prototype$__findById__birthplaceKittens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/birthplaces/:id/birthplaceKittens/:fk",
          method: "GET"
        },

        // INTERNAL. Use Birthplace.birthplaceKittens.destroyById() instead.
        "prototype$__destroyById__birthplaceKittens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/birthplaces/:id/birthplaceKittens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Birthplace.birthplaceKittens.updateById() instead.
        "prototype$__updateById__birthplaceKittens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/birthplaces/:id/birthplaceKittens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Birthplace.birthplaceKittens() instead.
        "prototype$__get__birthplaceKittens": {
          isArray: true,
          url: urlBase + "/birthplaces/:id/birthplaceKittens",
          method: "GET"
        },

        // INTERNAL. Use Birthplace.birthplaceKittens.create() instead.
        "prototype$__create__birthplaceKittens": {
          url: urlBase + "/birthplaces/:id/birthplaceKittens",
          method: "POST"
        },

        // INTERNAL. Use Birthplace.birthplaceKittens.destroyAll() instead.
        "prototype$__delete__birthplaceKittens": {
          url: urlBase + "/birthplaces/:id/birthplaceKittens",
          method: "DELETE"
        },

        // INTERNAL. Use Birthplace.birthplaceKittens.count() instead.
        "prototype$__count__birthplaceKittens": {
          url: urlBase + "/birthplaces/:id/birthplaceKittens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Birthplace#create
         * @methodOf lbServices.Birthplace
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Birthplace` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/birthplaces",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Birthplace#createMany
         * @methodOf lbServices.Birthplace
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Birthplace` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/birthplaces",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Birthplace#upsert
         * @methodOf lbServices.Birthplace
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Birthplace` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/birthplaces",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Birthplace#exists
         * @methodOf lbServices.Birthplace
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/birthplaces/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Birthplace#findById
         * @methodOf lbServices.Birthplace
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Birthplace` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/birthplaces/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Birthplace#find
         * @methodOf lbServices.Birthplace
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Birthplace` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/birthplaces",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Birthplace#findOne
         * @methodOf lbServices.Birthplace
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Birthplace` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/birthplaces/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Birthplace#updateAll
         * @methodOf lbServices.Birthplace
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/birthplaces/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Birthplace#deleteById
         * @methodOf lbServices.Birthplace
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/birthplaces/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Birthplace#count
         * @methodOf lbServices.Birthplace
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/birthplaces/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Birthplace#prototype$updateAttributes
         * @methodOf lbServices.Birthplace
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Birthplace` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/birthplaces/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Birthplace#createChangeStream
         * @methodOf lbServices.Birthplace
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/birthplaces/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Kitten.kittenBirthplace() instead.
        "::get::kitten::kittenBirthplace": {
          url: urlBase + "/kittens/:id/kittenBirthplace",
          method: "GET"
        },

        // INTERNAL. Use Kitten.kittenBirthplace.create() instead.
        "::create::kitten::kittenBirthplace": {
          url: urlBase + "/kittens/:id/kittenBirthplace",
          method: "POST"
        },

        // INTERNAL. Use Kitten.kittenBirthplace.createMany() instead.
        "::createMany::kitten::kittenBirthplace": {
          isArray: true,
          url: urlBase + "/kittens/:id/kittenBirthplace",
          method: "POST"
        },

        // INTERNAL. Use Kitten.kittenBirthplace.update() instead.
        "::update::kitten::kittenBirthplace": {
          url: urlBase + "/kittens/:id/kittenBirthplace",
          method: "PUT"
        },

        // INTERNAL. Use Kitten.kittenBirthplace.destroy() instead.
        "::destroy::kitten::kittenBirthplace": {
          url: urlBase + "/kittens/:id/kittenBirthplace",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Birthplace#updateOrCreate
         * @methodOf lbServices.Birthplace
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Birthplace` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Birthplace#update
         * @methodOf lbServices.Birthplace
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Birthplace#destroyById
         * @methodOf lbServices.Birthplace
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Birthplace#removeById
         * @methodOf lbServices.Birthplace
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Birthplace#modelName
    * @propertyOf lbServices.Birthplace
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Birthplace`.
    */
    R.modelName = "Birthplace";

    /**
     * @ngdoc object
     * @name lbServices.Birthplace.birthplaceKittens
     * @header lbServices.Birthplace.birthplaceKittens
     * @object
     * @description
     *
     * The object `Birthplace.birthplaceKittens` groups methods
     * manipulating `Kitten` instances related to `Birthplace`.
     *
     * Call {@link lbServices.Birthplace#birthplaceKittens Birthplace.birthplaceKittens()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Birthplace#birthplaceKittens
         * @methodOf lbServices.Birthplace
         *
         * @description
         *
         * Queries birthplaceKittens of birthplace.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Kitten` object.)
         * </em>
         */
        R.birthplaceKittens = function() {
          var TargetResource = $injector.get("Kitten");
          var action = TargetResource["::get::birthplace::birthplaceKittens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Birthplace.birthplaceKittens#count
         * @methodOf lbServices.Birthplace.birthplaceKittens
         *
         * @description
         *
         * Counts birthplaceKittens of birthplace.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.birthplaceKittens.count = function() {
          var TargetResource = $injector.get("Kitten");
          var action = TargetResource["::count::birthplace::birthplaceKittens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Birthplace.birthplaceKittens#create
         * @methodOf lbServices.Birthplace.birthplaceKittens
         *
         * @description
         *
         * Creates a new instance in birthplaceKittens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Kitten` object.)
         * </em>
         */
        R.birthplaceKittens.create = function() {
          var TargetResource = $injector.get("Kitten");
          var action = TargetResource["::create::birthplace::birthplaceKittens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Birthplace.birthplaceKittens#createMany
         * @methodOf lbServices.Birthplace.birthplaceKittens
         *
         * @description
         *
         * Creates a new instance in birthplaceKittens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Kitten` object.)
         * </em>
         */
        R.birthplaceKittens.createMany = function() {
          var TargetResource = $injector.get("Kitten");
          var action = TargetResource["::createMany::birthplace::birthplaceKittens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Birthplace.birthplaceKittens#destroyAll
         * @methodOf lbServices.Birthplace.birthplaceKittens
         *
         * @description
         *
         * Deletes all birthplaceKittens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.birthplaceKittens.destroyAll = function() {
          var TargetResource = $injector.get("Kitten");
          var action = TargetResource["::delete::birthplace::birthplaceKittens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Birthplace.birthplaceKittens#destroyById
         * @methodOf lbServices.Birthplace.birthplaceKittens
         *
         * @description
         *
         * Delete a related item by id for birthplaceKittens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for birthplaceKittens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.birthplaceKittens.destroyById = function() {
          var TargetResource = $injector.get("Kitten");
          var action = TargetResource["::destroyById::birthplace::birthplaceKittens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Birthplace.birthplaceKittens#findById
         * @methodOf lbServices.Birthplace.birthplaceKittens
         *
         * @description
         *
         * Find a related item by id for birthplaceKittens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for birthplaceKittens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Kitten` object.)
         * </em>
         */
        R.birthplaceKittens.findById = function() {
          var TargetResource = $injector.get("Kitten");
          var action = TargetResource["::findById::birthplace::birthplaceKittens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Birthplace.birthplaceKittens#updateById
         * @methodOf lbServices.Birthplace.birthplaceKittens
         *
         * @description
         *
         * Update a related item by id for birthplaceKittens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for birthplaceKittens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Kitten` object.)
         * </em>
         */
        R.birthplaceKittens.updateById = function() {
          var TargetResource = $injector.get("Kitten");
          var action = TargetResource["::updateById::birthplace::birthplaceKittens"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
