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
const vscode_1 = require("vscode");
const util_1 = require("./util");
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    const html = yield util_1.getWebContent('https://shine.wiki/1.5.x/cn/index/');
    const panel = vscode_1.window.createWebviewPanel('docs', 'shineout文档', vscode_1.ViewColumn.One, {
        enableScripts: true,
        retainContextWhenHidden: true,
    });
    console.log(html);
    panel.webview.html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>shineout</title>
  </head>
  <body>
    <iframe style="width: 100%; height: 100%;" src="https://shine.wiki/1.5.x/cn/index" />
  </body>
  </html>`;
});
//# sourceMappingURL=webview.js.map