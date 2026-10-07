// Prerender the landing page into build/index.html so crawlers and
// verification bots that don't run JavaScript see the real content.
// Runs after `react-scripts build`. The client still mounts with createRoot,
// which replaces this markup with the identical live React tree.
const fs = require("fs");
const path = require("path");
const esbuild = require("esbuild");

const root = path.resolve(__dirname, "..");
const outFile = path.join(root, "build", ".prerender", "App.cjs");
const indexHtml = path.join(root, "build", "index.html");

esbuild.buildSync({
  entryPoints: [path.join(root, "src", "App.js")],
  outfile: outFile,
  bundle: true,
  platform: "node",
  format: "cjs",
  packages: "external",
  loader: { ".js": "jsx" },
  jsx: "automatic",
  logLevel: "error",
});

const React = require("react");
const { renderToString } = require("react-dom/server");
const App = require(outFile).default;

const markup = renderToString(React.createElement(App));
const html = fs.readFileSync(indexHtml, "utf8");
const placeholder = '<div id="root"></div>';

if (!html.includes(placeholder)) {
  throw new Error(`prerender: ${placeholder} not found in build/index.html`);
}

fs.writeFileSync(indexHtml, html.replace(placeholder, `<div id="root">${markup}</div>`));
fs.rmSync(path.dirname(outFile), { recursive: true, force: true });
console.log(`prerender: injected ${markup.length} chars into build/index.html`);
