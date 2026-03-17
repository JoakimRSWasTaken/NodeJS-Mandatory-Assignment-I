import { Router } from 'express';

const router = Router();

import { variablesPage, dataTypesPage, typeCoercionPage, functionsPage, loopMethodsAndSideEffectsPage, datePage, fetchpagePage
} from "../util/pagesUtil.js";

router.get('/javascript/variables', (req, res) => {
    res.send(variablesPage);
});

router.get('/javascript/data-types', (req, res) => {
    res.send(dataTypesPage);
});

router.get('/javascript/type-coercion', (req, res) => {
    res.send(typeCoercionPage);
});

router.get('/javascript/functions', (req, res) => {
    res.send(functionsPage);
});

router.get('/javascript/loop-methods-and-side-effects', (req, res) => {
    res.send(loopMethodsAndSideEffectsPage);
});

router.get('/javascript/date', (req, res) => {
    res.send(datePage);
});

router.get('/javascript/fetch', (req, res) => {
    res.send(fetchpagePage);
});

export default router;