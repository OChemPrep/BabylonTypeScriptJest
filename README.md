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