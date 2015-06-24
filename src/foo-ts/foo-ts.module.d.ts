/// <reference path="../../typings/tsd.d.ts" />

declare var fooTsModule:angular.IModule;

declare module 'foo-ts.module' {
    export = fooTsModule
}
