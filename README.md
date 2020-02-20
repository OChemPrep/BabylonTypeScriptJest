# BabylonTypeScriptJest
expect(BabylonJS + TypeScript + Jest).toWork(); &lt;-- Fail

Simple test case to see how I can get BabylonJS + TypeScript + Jest to work together.

Webpack and maybe Babel if this works.

'''
npm install --save-dev typescript jest ts-jest @types/jest
npm install --save-dev @babylonjs/core

tsc --init
npx ts-jest config:init
'''

Added usage of a BabylonJS Engine and boom...

'''
  <rootDir>/BabylonTypeScriptJest/node_modules/@babylonjs/core/Engines/nullEngine.js:1
    import * as tslib_1 from "tslib";
           ^

    SyntaxError: Unexpected token *

      1 | import { Engine } from "@babylonjs/core/Engines/engine";
    > 2 | import { NullEngine } from "@babylonjs/core/Engines/nullEngine";
        | ^
      3 | 
      4 | export default class MyApp {
      5 | 

      at Runtime._execModule (node_modules/jest-runtime/build/index.js:988:58)
      at Object.<anonymous> (src/MyApp.ts:2:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.971s
Ran all test suites.
npm ERR! Test failed.  See above for more details.
'''