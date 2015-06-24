///<reference path="../typings/tsd.d.ts"/>

import * as angular from 'angular';
import * as barEs6Module from 'bar-es6.module';
import * as fooTsModule from 'foo-ts.module';

console.log('Bar ES6', barEs6Module);
console.log('Foo TS', fooTsModule);

var module:any = fooTsModule;

const coreModule = angular.module('core',
    [
        barEs6Module.name,
        module.default.name
    ]);

angular.bootstrap(document.body, [coreModule.name]);
