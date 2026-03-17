// JS Notes navigation ===============================================================================================
const variablesNavigationButton = document.getElementById('variables-navigation');
variablesNavigationButton.addEventListener('click', () => {
    location.href = '/javascript-notes/variables';
    console.log(location.href);
});

const dataTypesNavigationButton = document.getElementById('data-types-navigation');
dataTypesNavigationButton.addEventListener('click', () => {
    location.href = '/javascript-notes/data-types';
    console.log(location.href);
});

const typeCoercionNavigationButton = document.getElementById('type-coercion-navigation');
typeCoercionNavigationButton.addEventListener('click', () => {
    location.href = '/javascript-notes/type-coercion';
    console.log(location.href);
});

const functionsNavigationButton = document.getElementById('functions-navigation');
functionsNavigationButton.addEventListener('click', () => {
    location.href = '/javascript-notes/functions';
});

const loopMethodsAndSideEffectsNavigationButton = document.getElementById('loop-methods-and-side-effects-navigation');
loopMethodsAndSideEffectsNavigationButton.addEventListener('click', () => {
    location.href = '/javascript-notes/loop-methods-and-side-effects';
});

const dateNavigationButton = document.getElementById('date-navigation');
dateNavigationButton.addEventListener('click', () => {
    location.href = '/javascript-notes/date';
});

const fetchNavigationButton = document.getElementById('fetch-navigation');
fetchNavigationButton.addEventListener('click', () => {
    location.href = '/javascript-notes/fetch';
});

// Node and Express Notes navigation =================================================================================
const nodeJsNpmAndNodemonNavigationButton = document.getElementById('nodejs-npm-and-nodemon-navigation');
nodeJsNpmAndNodemonNavigationButton.addEventListener('click', () => {
    location.href = '/node-and-express-notes/nodejs-npm-and-nodemon';
});

const importAndExportNavigationButton = document.getElementById('import-and-export-navigation');
importAndExportNavigationButton.addEventListener('click', () => {
    location.href = '/node-and-express-notes/import-and-export';
});

const packageJsonNavigationButton = document.getElementById('package-json-navigation');
packageJsonNavigationButton.addEventListener('click', () => {
    location.href = '/node-and-express-notes/package-json';
});

const creatingAServerWithExpressNavigationButton = document.getElementById('creating-a-server-with-express-navigation');
creatingAServerWithExpressNavigationButton.addEventListener('click', () => {
    location.href = '/node-and-express-notes/creating-a-server-with-express';
});

const xssNavigationButton = document.getElementById('xss-navigation');
xssNavigationButton.addEventListener('click', () => {
    location.href = '/node-and-express-notes/xss';
});

const servingStaticFilesInExpressNavigationButton = document.getElementById('serving-static-files-with-express-navigation');
servingStaticFilesInExpressNavigationButton.addEventListener('click', () => {
    location.href = '/node-and-express-notes/serving-static-files-with-express';
});

const redirectionNavigationButton = document.getElementById('redirection-navigation');
redirectionNavigationButton.addEventListener('click', () => {
    location.href = '/node-and-express-notes/redirection';
});

const routersNavigationButton = document.getElementById('routers-navigation');
routersNavigationButton.addEventListener('click', () => {
    location.href = '/node-and-express-notes/routers';
});

const csrVsSsrNavigationButton = document.getElementById('csr-vs-ssr-navigation');
csrVsSsrNavigationButton.addEventListener('click', () => {
    location.href = '/node-and-express-notes/csr-vs-ssr';
});

// REST API Notes navigation =========================================================================================
const restApiVerbsNavigationButton = document.getElementById('rest-api-verbs-navigation');
restApiVerbsNavigationButton.addEventListener('click', () => {
    location.href = '/rest-api-notes/rest-api-verbs';
});

const restConventionsNavigationButton = document.getElementById('rest-conventions-navigation');
restConventionsNavigationButton.addEventListener('click', () => {
    location.href = '/rest-api-notes/rest-conventions';
});