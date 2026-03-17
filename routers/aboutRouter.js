import { Router } from 'express';

const router = Router();

import { aboutPage } from "../util/pagesUtil.js";

router.get('/about', (req, res) => {
    res.send(aboutPage);
});

export default router;