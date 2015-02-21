'use strict';

angular.module('timers')
  .controller('MainCtrl', function ($scope) {

    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDate();

    var officerTimes = [
        {
            'title': 'Start',
            'time': 0,
        },
        {
            'title': 'Result Announced',
            'time': 1000 * 60 * 1,
        },
        {
            'title': 'On Stage',
            'time': 1000 * 60 * 2,
        },
        {
            'title': 'Speech Done',
            'time': 1000 * 60 * 3,
        },
        {
            'title': 'Interview Done',
            'time': 1000 * 60 * 6,
        }
    ];
    var sabbTimes = [
        {
            'title': 'Start',
            'time': 0,
        },
        {
            'title': 'Result Announced',
            'time': 1000 * 60 * 1,
        },
        {
            'title': 'On Stage',
            'time': 1000 * 60 * 2,
        },
        {
            'title': 'Speech Done',
            'time': 1000 * 60 * 3,
        },
        {
            'title': 'Interview Done',
            'time': 1000 * 60 * 10,
        }
    ];

    $scope.timers = [
        new (function () {
            this.title = 'Student Trustee & Senate Rep & Policy Coordinator';
            this.hour = 21;
            this.minute = 0;
            this.time = new Date(year, month, day, this.hour, this.minute);
            this.times = officerTimes;
        })(),
        new (function () {
            this.title = 'NUS';
            this.hour = 21;
            this.minute = 10;
            this.time = new Date(year, month, day, this.hour, this.minute);
            this.times = officerTimes;
        })(),
        new (function () {
            this.title = 'Women’s & LGBTQ';
            this.hour = 21;
            this.minute = 20;
            this.time = new Date(year, month, day, this.hour, this.minute);
            this.times = officerTimes;
        })(),
        new (function () {
            this.title = 'RAG & Volunteering';
            this.hour = 21;
            this.minute = 30;
            this.time = new Date(year, month, day, this.hour, this.minute);
            this.times = officerTimes;
        })(),
        new (function () {
            this.title = 'International & Env and Ethics';
            this.hour = 21;
            this.minute = 40;
            this.time = new Date(year, month, day, this.hour, this.minute);
            this.times = officerTimes;
        })(),
        new (function () {
            this.title = 'Disabled & BME';
            this.hour = 21;
            this.minute = 50;
            this.time = new Date(year, month, day, this.hour, this.minute);
            this.times = officerTimes;
        })(),
        new (function () {
            this.title = 'Welfare';
            this.hour = 22;
            this.minute = 15;
            this.time = new Date(year, month, day, this.hour, this.minute);
            this.times = sabbTimes;
        })(),
        new (function () {
            this.title = 'Academic';
            this.hour = 22;
            this.minute = 30;
            this.time = new Date(year, month, day, this.hour, this.minute);
            this.times = sabbTimes;
        })(),
        new (function () {
            this.title = 'Sport';
            this.hour = 22;
            this.minute = 45;
            this.time = new Date(year, month, day, this.hour, this.minute);
            this.times = sabbTimes;
        })(),
        new (function () {
            this.title = 'Activities';
            this.hour = 23;
            this.minute = 0;
            this.time = new Date(year, month, day, this.hour, this.minute);
            this.times = sabbTimes;
        })(),
        new (function () {
            this.title = 'President';
            this.hour = 23;
            this.minute = 15;
            this.time = new Date(year, month, day, this.hour, this.minute);
            this.times = sabbTimes;
        })(),
    ];

    $scope.openingTime = new Date(year, month, day, 20, 55);
    $scope.startTime = new Date(year, month, day, 21, 0);
    $scope.endTime = new Date(year, month, day, 23, 30);


    $scope.updateTimer = function() {
        $('timer').each( function() {
            this.start();
        });
    };

  });
