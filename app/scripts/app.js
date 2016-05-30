'use strict';

/**
 * @ngdoc overview
 * @name projectHoundApp
 * @description
 * # projectHoundApp
 *
 * Main module of the application.
 */
angular
  .module('projectHoundApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
