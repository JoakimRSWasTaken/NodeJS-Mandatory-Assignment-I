import { Router } from 'express';

const router = Router();

import { frontpagePage } from "../util/pagesUtil.js";

router.get('/', (req, res) => {
    res.send(frontpagePage);
});

export default router;