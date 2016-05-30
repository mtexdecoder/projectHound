'use strict';

/**
 * @ngdoc function
 * @name projectHoundApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectHoundApp
 */
angular.module('projectHoundApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
