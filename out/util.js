"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const babylon_1 = require("babylon");
const vscode_1 = require("vscode");
const axios_1 = require("axios");
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
exports.getWebContent = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const getContentRet = yield axios_1.default.get(path);
    if (getContentRet.status === 200) {
        return getContentRet.data;
    }
    else {
        return 'Error';
    }
});
//# sourceMappingURL=util.js.map