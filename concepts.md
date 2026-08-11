## node js JS runtime

JS runs outside of the browser

V8

## npm - node package manager

Dependencies (dependencies) — Packages your application needs to run in production.
Example: express, mongoose, jsonwebtoken.
Dev Dependencies (devDependencies) — Packages needed only while developing or building/testing the application. They normally aren't required when the app is running in production.
Example: nodemon, jest, eslint, typescript.
Runtime packages — Packages that are actually used while your application is running. In practice, these are usually the packages listed under dependencies.
Simple example
npm install express

➡️ express → dependency/runtime package

npm install --save-dev nodemon

➡️ nodemon → dev dependency

Easy way to remember:

dependencies = needed to run
devDependencies = needed to develop
runtime packages = packages active when the app runs
