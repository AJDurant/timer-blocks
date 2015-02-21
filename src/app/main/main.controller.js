'use strict';

angular.module('timers')
  .controller('MainCtrl', function ($scope) {
    $scope.timers = [
        {
            'title': 'One',
            'times': [
                {
                  'title': 'Start',
                  'time': new Date().setHours(12,0,0,0)
                },
                {
                  'title': 'Result',
                  'time': new Date().setHours(12,1,0,0)
                },
                {
                  'title': 'On Stage',
                  'time': new Date().setHours(21,2,0,0)
                },
                {
                  'title': 'Speech',
                  'time': new Date().setHours(21,3,0,0)
                },
                {
                  'title': 'Interview -> YSTV',
                  'time': new Date().setHours(21,6,0,0)
                }
            ]
        },
        {
            'title': 'Two',
            'times': [
                {
                  'title': 'Start',
                  'time': new Date().setHours(21,10,0,0)
                },
                {
                  'title': 'Result',
                  'time': new Date().setHours(21,11,0,0)
                },
                {
                  'title': 'On Stage',
                  'time': new Date().setHours(21,12,0,0)
                },
                {
                  'title': 'Speech',
                  'time': new Date().setHours(21,13,0,0)
                },
                {
                  'title': 'Interview -> YSTV',
                  'time': new Date().setHours(21,16,0,0)
                }
            ]
        }

    ];
    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
