import { readPage, constructPage } from "./templateEngine.js"

const defaultCssLinks = '    <link rel="stylesheet" href="/assets/css/main.css">    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css">';
const defaultScriptLinks = '    <script type="module" src="/assets/js/header.js"></script>   <script type="module" src="/assets/js/footer.js"></script>';

// ==============  FP, About, Contact  ===============

const frontpage = readPage('./public/pages/frontpage/frontpage.html');
export const frontpagePage = constructPage(frontpage, {
    cssLink: defaultCssLinks,
    scriptLink: defaultScriptLinks
});

const about = readPage('./public/pages/about/about.html');
export const aboutPage = constructPage(about, {
    documentTitle: "Node.js for Dummies | About Us",
    cssLink: defaultCssLinks,
    scriptLink: defaultScriptLinks
});

const contact = readPage('./public/pages/contact/contact.html');
export const contactPage = constructPage(contact, {
    documentTitle: "Node.js for Dummies",
    cssLink: defaultCssLinks,
    scriptLink: defaultScriptLinks
});

// ===============  JavaScript Notes  ================

const variables = readPage('./public/pages/javaScriptNotes/variables.html');
export const variablesPage = constructPage(variables, {
    documentTitle: "JavaScript for Dummies | Variables",
    cssLink: defaultCssLinks,
    scriptLink: defaultScriptLinks
});

const dataTypes = readPage('./public/pages/javaScriptNotes/data-types.html');
export const dataTypesPage = constructPage(dataTypes, {
    documentTitle: "JavaScript for Dummies | Data Types",
    cssLink: defaultCssLinks,
    scriptLink: defaultScriptLinks
});

const typeCoercion = readPage('./public/pages/javaScriptNotes/type-coercion.html');
export const typeCoercionPage = constructPage(typeCoercion, {
    documentTitle: "JavaScript for Dummies | Type Coercion",
    cssLink: defaultCssLinks,
    scriptLink: defaultScriptLinks
});

const functions = readPage('./public/pages/javaScriptNotes/functions.html');
export const functionsPage = constructPage(functions, {
    documentTitle: "JavaScript for Dummies | Functions",
    cssLink: defaultCssLinks,
    scriptLink: defaultScriptLinks
});

const loopMethodsAndSideEffects = readPage('./public/pages/javaScriptNotes/loop-methods-and-side-effects.html');
export const loopMethodsAndSideEffectsPage = constructPage(loopMethodsAndSideEffects, {
    documentTitle: "JavaScript for Dummies | Loop Methods & Side Effects",
    cssLink: defaultCssLinks,
    scriptLink: defaultScriptLinks
});

const date = readPage('./public/pages/javaScriptNotes/date.html');
export const datePage = constructPage(date, {
    documentTitle: "JavaScript for Dummies | Date",
    cssLink: defaultCssLinks,
    scriptLink: defaultScriptLinks
});

const fetchpage = readPage('./public/pages/javaScriptNotes/fetch.html');
export const fetchpagePage = constructPage(fetchpage, {
    documentTitle: "JavaScript for Dummies | Fetch",
    cssLink: defaultCssLinks,
    scriptLink: defaultScriptLinks
});

// ===============  Express Notes  ================

const creatingAServerWithExpress = readPage('./public/pages/nodeExpressNotes/creating-a-server.html');
export const creatingAServerWithExpressPage = constructPage(creatingAServerWithExpress, {
    documentTitle: "Node.js for Dummies | Creating a Server with Express",
    cssLink: defaultCssLinks,
    scriptLink: defaultScriptLinks
});

const csrSsr = readPage('./public/pages/nodeExpressNotes/csr-ssr.html');
export const csrSsrPage = constructPage(csrSsr, {
    documentTitle: "Node.js for Dummies | CSR vs. SSR",
    cssLink: defaultCssLinks,
    scriptLink: defaultScriptLinks
});

const importExport = readPage('./public/pages/nodeExpressNotes/import-export.html');
export const importExportPage = constructPage(importExport, {
    documentTitle: "Node.js for Dummies | Import & Export",
    cssLink: defaultCssLinks,
    scriptLink: defaultScriptLinks
});

const nodeNpmAndNodemon = readPage('./public/pages/nodeExpressNotes/node-npm-nodemon.html');
export const nodeNpmAndNodemonPage = constructPage(nodeNpmAndNodemon, {
    documentTitle: "Node.js for Dummies | Node.js, npm & nodemon",
    cssLink: defaultCssLinks,
    scriptLink: defaultScriptLinks
});

const packageJson = readPage('./public/pages/nodeExpressNotes/package-json.html');
export const packageJsonPage = constructPage(packageJson, {
    documentTitle: "Node.js for Dummies | package.json",
    cssLink: defaultCssLinks,
    scriptLink: defaultScriptLinks
});

const redirection = readPage('./public/pages/nodeExpressNotes/redirection.html');
export const redirectionPage = constructPage(redirection, {
    documentTitle: "Node.js for Dummies | Redirection",
    cssLink: defaultCssLinks,
    scriptLink: defaultScriptLinks
});

const routers = readPage('./public/pages/nodeExpressNotes/routers.html');
export const routersPage = constructPage(routers, {
    documentTitle: "Node.js for Dummies | Routers",
    cssLink: defaultCssLinks,
    scriptLink: defaultScriptLinks
});

const servingStaticFilesWithExpress = readPage('./public/pages/nodeExpressNotes/serving-static-files.html');
export const servingStaticFilesWithExpressPage = constructPage(servingStaticFilesWithExpress, {
    documentTitle: "Node.js for Dummies | Serving Static Files with Express",
    cssLink: defaultCssLinks,
    scriptLink: defaultScriptLinks
});

const xss = readPage('./public/pages/nodeExpressNotes/xss.html');
export const xssPage = constructPage(xss, {
    documentTitle: "Node.js for Dummies | XSS and how to avoid it",
    cssLink: defaultCssLinks,
    scriptLink: defaultScriptLinks
});

// ===============  REST API Notes  ================

const restConventions = readPage('./public/pages/restApiNotes/rest-api-conventions.html');
export const restConventionsPage = constructPage(restConventions, {
    documentTitle: "REST API for Dummies | REST Conventions",
    cssLink: defaultCssLinks,
    scriptLink: defaultScriptLinks
});

const restApiVerbs = readPage('./public/pages/restApiNotes/rest-api-verbs.html');
export const restApiVerbsPage = constructPage(restApiVerbs, {
    documentTitle: "REST API for Dummies | REST API Verbs",
    cssLink: defaultCssLinks,
    scriptLink: defaultScriptLinks
});