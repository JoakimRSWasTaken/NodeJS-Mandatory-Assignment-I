import { Router } from 'express';

const router = Router();

import {
    variablesPage, dataTypesPage, typeCoercionPage, functionsPage, loopMethodsAndSideEffectsPage, datePage, fetchpagePage
} from "../util/pagesUtil.js";

router.get('/javascript-notes/variables', (req, res) => {
    res.send(variablesPage);
});

router.get('/javascript-notes/data-types', (req, res) => {
    res.send(dataTypesPage);
});

router.get('/javascript-notes/type-coercion', (req, res) => {
    res.send(typeCoercionPage);
});

router.get('/javascript-notes/functions', (req, res) => {
    res.send(functionsPage);
});

router.get('/javascript-notes/loop-methods-and-side-effects', (req, res) => {
    res.send(loopMethodsAndSideEffectsPage);
});

router.get('/javascript-notes/date', (req, res) => {
    res.send(datePage);
});

router.get('/javascript-notes/fetch', (req, res) => {
    res.send(fetchpagePage);
});

export default router;