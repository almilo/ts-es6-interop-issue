///<reference path="../../typings/tsd.d.ts"/>

import * as angular from 'angular';

export default angular.module('foo-ts', [])
    .run(function () {
        console.log('Foo TS');
    });
