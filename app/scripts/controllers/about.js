'use strict';

/**
 * @ngdoc function
 * @name projectHoundApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projectHoundApp
 */
angular.module('projectHoundApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
