import { Router } from 'express';

const router = Router();

import { contactPage } from "../util/pagesUtil.js";

router.get('/contact', (req, res) => {
    res.send(contactPage);
});

export default router;