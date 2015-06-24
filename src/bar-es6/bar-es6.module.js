import * as angular from 'angular';

export default angular.module('bar-es6', [])
    .run(function () {
        console.log('Bar ES6');
    });
