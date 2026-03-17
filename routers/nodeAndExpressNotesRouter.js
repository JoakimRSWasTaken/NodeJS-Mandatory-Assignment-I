import { Router } from 'express';

const router = Router();

import {
    creatingAServerWithExpressPage, csrSsrPage, importExportPage, nodeNpmAndNodemonPage, packageJsonPage, redirectionPage, routersPage, servingStaticFilesWithExpressPage, xssPage
} from "../util/pagesUtil.js";

router.get('/node-and-express-notes/creating-a-server-with-express', (req, res) => {
    res.send(creatingAServerWithExpressPage);
});

router.get('/node-and-express-notes/csr-vs-ssr', (req, res) => {
    res.send(csrSsrPage);
});

router.get('/node-and-express-notes/import-and-export', (req, res) => {
    res.send(importExportPage);
});

router.get('/node-and-express-notes/nodejs-npm-and-nodemon', (req, res) => {
    res.send(nodeNpmAndNodemonPage);
});

router.get('/node-and-express-notes/package-json', (req, res) => {
    res.send(packageJsonPage);
});

router.get('/node-and-express-notes/redirection', (req, res) => {
    res.send(redirectionPage);
});

router.get('/node-and-express-notes/routers', (req, res) => {
    res.send(routersPage);
});

router.get('/node-and-express-notes/serving-static-files-with-express', (req, res) => {
    res.send(servingStaticFilesWithExpressPage);
});

router.get('/node-and-express-notes/xss', (req, res) => {
    res.send(xssPage);
});

export default router;