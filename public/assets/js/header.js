//import { navigate } from "../../util/navigationUtil.js";

// JS Notes navigation

const variablesNavigationButton = document.getElementById('variables-navigation');
variablesNavigationButton.addEventListener('click', () => {
    location.href = '/javascript/variables';
    console.log(location.href);
});

const dataTypesNavigationButton = document.getElementById('data-types-navigation');
dataTypesNavigationButton.addEventListener('click', () => {
    location.href = '/javascript/data-types';
    console.log(location.href);
});

const typeCoercionNavigationButton = document.getElementById('type-coercion-navigation');
typeCoercionNavigationButton.addEventListener('click', () => {
    location.href = '/javascript/type-coercion';
    console.log(location.href);
});

const functionsNavigationButton = document.getElementById('functions-navigation');
functionsNavigationButton.addEventListener('click', () => {
    location.href = '/javascript/functions';
});

const loopMethodsAndSideEffectsNavigationButton = document.getElementById('loop-methods-and-side-effects-navigation');
loopMethodsAndSideEffectsNavigationButton.addEventListener('click', () => {
    location.href = '/javascript/loop-methods-and-side-effects';
});

const dateNavigationButton = document.getElementById('date-navigation');
dateNavigationButton.addEventListener('click', () => {
    location.href = '/javascript/date';
});

const fetchNavigationButton = document.getElementById('fetch-navigation');
fetchNavigationButton.addEventListener('click', () => {
    location.href = '/javascript/fetch';
});
