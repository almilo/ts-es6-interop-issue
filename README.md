# ts-es6-interop-issue
Showcase for TS-ES6 Interop issue

This small application shows an interop issue between TS and ES6 modules in TS 1.5-beta (https://github.com/Microsoft/TypeScript/issues/2719)

To run the application, execute:
```
npm install
npm run serve
```

For internal module resolution, see webpack.config.js ('resolve.modulesDirectories')

```javascript
// from src/index.ts

import * as barEs6Module from 'bar-es6.module';
import * as fooTsModule from 'foo-ts.module';

console.log('Bar ES6', barEs6Module); // outputs the object exported by default
console.log('Foo TS', fooTsModule);   // outputs a wrapping object with a default property instead

var module:any = fooTsModule;         // needed to avoid TS compiler claiming that fooTsModule has no default property

const coreModule = angular.module('core',
    [
        barEs6Module.name,
        module.default.name           // exported angular module needs to be accessed through default
    ]);

```
