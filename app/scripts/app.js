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
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/projects',{
        controller:'ListviewCtrl',
        templateUrl:'views/listview.html'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });
