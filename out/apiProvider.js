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
const babel_traverse_1 = require("babel-traverse");
const vscode_1 = require("vscode");
const api = require("./api");
const util_1 = require("./util");
class ApiProvider {
    isReactComponent(jsxOpeningElement) {
        const nameOfJsxTag = jsxOpeningElement.name.name;
        return nameOfJsxTag[0] === nameOfJsxTag[0].toUpperCase();
    }
    isCursorInJsxOpeningElement(cursorPosition, jsxOpeningElement) {
        console.log();
        return cursorPosition > jsxOpeningElement.start && cursorPosition < jsxOpeningElement.end;
    }
    isCursorInJsxAttribute(cursorPosition, node, scope) {
        let result = false;
        babel_traverse_1.default(node, {
            JSXAttribute(path) {
                const jsxAttribute = path.node;
                if (cursorPosition > jsxAttribute.start && cursorPosition < jsxAttribute.end) {
                    result = true;
                }
            }
        }, scope);
        return result;
    }
    getJsxOpeningElement(document, position) {
        const documentText = document.getText();
        const cursorPosition = document.offsetAt(position);
        const ast = util_1.getAst(documentText);
        if (!ast) {
            return undefined;
        }
        let result;
        babel_traverse_1.default(ast, {
            JSXOpeningElement: path => {
                const jsxOpeningElement = path.node;
                const isCursorInJsxOpeningElement = this.isCursorInJsxOpeningElement(cursorPosition, jsxOpeningElement);
                const isCursorInJsxAttribute = this.isCursorInJsxAttribute(cursorPosition, jsxOpeningElement, path.scope);
                if (isCursorInJsxOpeningElement && !isCursorInJsxAttribute) {
                    result = jsxOpeningElement;
                }
            }
        });
        return result;
    }
    provideCompletionItems(document, position) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsxOpeningElement = this.getJsxOpeningElement(document, position);
            console.log(jsxOpeningElement);
            if (!jsxOpeningElement || !this.isReactComponent(jsxOpeningElement)) {
                return [];
            }
            const componentName = jsxOpeningElement.name.name;
            const matchApi = api[componentName.toLowerCase()];
            if (matchApi) {
                const attrs = Object.keys(matchApi);
                const completionItems = attrs.map(attr => {
                    const completionItem = new vscode_1.CompletionItem(attr, vscode_1.CompletionItemKind.Property);
                    completionItem.detail = matchApi[attr];
                    return completionItem;
                });
                return completionItems;
            }
            return [];
        });
    }
}
exports.default = ApiProvider;
//# sourceMappingURL=apiProvider.js.map