import express from 'express';

const app = express();

app.use(express.static('public'));

// ========= Serving static files for Vercel ===========

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

addStaticRoutes(path.resolve(__dirname, 'public'));

function addStaticRoutes(dir, baseUrl = "") {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    files.forEach((file) => {
        const fullPath = path.join(dir, file.name);
        const routePath = path.join(baseUrl, file.name).replace(/\\/g, "/");


        if (file.isDirectory()) {
            addStaticRoutes(fullPath, routePath);
        } else {
            app.get(`/${routePath}`, (req, res) => {
                res.sendFile(fullPath);
            });
        }
    });
}

// ====================== Pages ========================
import frontpageRouter from "./routers/frontpageRouter.js";

app.use(frontpageRouter);

import aboutRouter from "./routers/aboutRouter.js";

app.use(aboutRouter);

import contactRouter from "./routers/contactRouter.js";

app.use(contactRouter);

import javaScriptNotesRouter from "./routers/javaScriptNotesRouter.js";

app.use(javaScriptNotesRouter);

import nodeAndExpressNotesRouter from "./routers/nodeAndExpressNotesRouter.js"

app.use(nodeAndExpressNotesRouter);

import restApiNotesRouter from "./routers/restApiNotesRouter.js"

app.use(restApiNotesRouter);


const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log('Server is listening on port', PORT);
})