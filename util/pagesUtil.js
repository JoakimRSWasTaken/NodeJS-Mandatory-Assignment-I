import { readPage, constructPage } from "./templateEngine.js"

const frontpage = readPage('./public/pages/frontpage/frontpage.html');
export const frontpagePage = constructPage(frontpage);