import express from 'express';

const app = express();

app.use(express.static('public'));

// =================== Pages =====================
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