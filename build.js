const fs = require("fs");
const path = require("path");
const sass = require("sass");
const CleanCSS = require("clean-css");

const THEMES_DIR = "./themes";

function getCss(themeDirectory, name, vars) {
    const filename = path.join(themeDirectory, "scss", `${name}.scss`);
    if (fs.existsSync(filename)) {
        const css = sass.renderSync({ file: filename }).css.toString();
        // return new CleanCSS({ level: 2 }).minify(css).styles;
        return new CleanCSS({
            level: 2,
            format: {
                breaks: {
                    afterAtRule: true, // controls if a line break comes after an at-rule; e.g. `@charset`; defaults to `false`
                    afterBlockBegins: true, // controls if a line break comes after a block begins; e.g. `@media`; defaults to `false`
                    afterBlockEnds: true, // controls if a line break comes after a block ends, defaults to `false`
                    afterComment: true, // controls if a line break comes after a comment; defaults to `false`
                    afterProperty: true, // controls if a line break comes after a property; defaults to `false`
                    afterRuleBegins: true, // controls if a line break comes after a rule begins; defaults to `false`
                    afterRuleEnds: true, // controls if a line break comes after a rule ends; defaults to `false`
                    beforeBlockEnds: true, // controls if a line break comes before a block ends; defaults to `false`
                    betweenSelectors: true, // controls if a line break comes between selectors; defaults to `false`
                },
                breakWith: "\n", // controls the new line character, can be `'\r\n'` or `'\n'` (aliased as `'windows'` and `'unix'` or `'crlf'` and `'lf'`); defaults to system one, so former on Windows and latter on Unix
                indentBy: 4, // controls number of characters to indent with; defaults to `0`
                indentWith: "space", // controls a character to indent with, can be `'space'` or `'tab'`; defaults to `'space'`
                spaces: { // controls where to insert spaces
                    aroundSelectorRelation: true, // controls if spaces come around selector relations; e.g. `div > a`; defaults to `false`
                    beforeBlockBegins: true, // controls if a space comes before a block begins; e.g. `.block {`; defaults to `false`
                    beforeValue: true, // controls if a space comes before a value; e.g. `width: 1rem`; defaults to `false`
                },
                wrapAt: false, // controls maximum line length; defaults to `false`
                semicolonAfterLastProperty: true, // controls removing trailing semicolons in rule; defaults to `false` - means remove
            },
        }).minify(css).styles;
    }
    return "";
}

function processTheme(themeDirectory) {
    /* eslint-disable global-require */
    /* eslint-disable import/no-dynamic-require */
    const theme = require(`./${path.join(themeDirectory, "theme")}`);
    /* eslint-enable global-require */
    /* eslint-enable import/no-dynamic-require */

    console.log(`Processing: ${theme.name}`);

    const settings = JSON.parse(fs.readFileSync(path.join(themeDirectory, "settings.json")));

    settings["editor-css"] = getCss(themeDirectory, "editor");
    settings["exported-html-css"] = getCss(themeDirectory, "html");
    settings["exported-pdf-css"] = getCss(themeDirectory, "pdf");
    settings["presentation-css"] = getCss(themeDirectory, "presentation");
    settings["preview-css"] = getCss(themeDirectory, "preview");

    fs.writeFileSync(path.join(themeDirectory, "out", "theme.json"), JSON.stringify(theme.data, null, 4));
    fs.writeFileSync(path.join(themeDirectory, "out", "settings.json"), JSON.stringify(settings, null, 4));
}

function main() {
    fs.readdirSync(THEMES_DIR).forEach((themeDir) => {
        const themeDirectory = path.join(THEMES_DIR, themeDir);
        processTheme(themeDirectory);
    });
}

main();
