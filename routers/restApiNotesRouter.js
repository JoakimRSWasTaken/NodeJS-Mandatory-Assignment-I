import { Router } from 'express';

const router = Router();

import {
    restConventionsPage, restApiVerbsPage
} from "../util/pagesUtil.js";

router.get('/rest-api-notes/rest-conventions', (req, res) => {
    res.send(restConventionsPage);
});

router.get('/rest-api-notes/rest-api-verbs', (req, res) => {
    res.send(restApiVerbsPage);
});

export default router;