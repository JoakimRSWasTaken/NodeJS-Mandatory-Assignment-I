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



// ===============  Import/Export Notes  ================



// ===============  REST API Notes  ================

