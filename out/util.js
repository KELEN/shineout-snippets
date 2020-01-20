"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const babylon_1 = require("babylon");
const vscode_1 = require("vscode");
exports.getAst = (fileText) => {
    try {
        return babylon_1.parse(fileText, {
            sourceType: 'module',
            plugins: [
                'jsx',
                'flow',
                'doExpressions',
                'objectRestSpread',
                'decorators',
                'classProperties',
                'exportExtensions',
                'asyncGenerators',
                'functionBind',
                'functionSent',
                'dynamicImport'
            ]
        });
    }
    catch (error) {
        return undefined;
    }
};
/**
 * get markdown template string
 * @param snippter
 */
exports.getSnippetMarkdownString = (snippter) => {
    const reg = /\$\{[\d]+:([^\}]+)\}.*?/g;
    const mk = new vscode_1.MarkdownString();
    let text = snippter.body[0];
    text = text.replace(reg, function (match, value) {
        return value;
    });
    mk.appendMarkdown(`## ${snippter.description}`);
    mk.appendCodeblock(text);
    return mk;
};
//# sourceMappingURL=util.js.map