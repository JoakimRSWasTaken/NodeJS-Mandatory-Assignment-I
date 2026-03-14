import express from 'express';

const app = express();

// =================== Pages =====================
import frontpageRouter from "./routers/frontpageRouter.js"

app.use(frontpageRouter);

// ==================== API ======================



const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log('Server is listening on port', PORT);
})