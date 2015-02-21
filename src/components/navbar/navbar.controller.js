'use strict';

angular.module('timers')
  .controller('NavbarCtrl', function ($scope) {
    $scope.date = new Date().setHours(0,0,0,0);

  });
