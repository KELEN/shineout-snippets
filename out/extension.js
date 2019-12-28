"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const api = require("./api/index");
function activate(context) {
    console.log('Happy shineout coding!!');
    const componentProvider = vscode_1.languages.registerCompletionItemProvider('javascript', {
        provideCompletionItems(document, position, token, context) {
            const componentCompletion = new vscode_1.CompletionItem('shineout-table');
            componentCompletion.insertText = new vscode_1.SnippetString('Good ${1|morning,afternoon,evening|}. It is ${1}, right?');
            componentCompletion.documentation = new vscode_1.MarkdownString("shineout table snippets");
            return [
                componentCompletion,
            ];
        }
    });
    const apiProvicer = vscode_1.languages.registerCompletionItemProvider('javascript', {
        provideCompletionItems(document, position, token, context) {
            const start = new vscode_1.Position(0, 0);
            const range = new vscode_1.Range(start, position);
            const text = document.getText(range);
            // import方式引入
            const importRegex = /import.*from.+shineout/g;
            const componentRegex = /<([A-Z][a-zA-Z0-9]*)\b[^<>]*$/g;
            if (importRegex.test(text) && componentRegex.test(text)) {
                const match = RegExp.$1;
                if (match) {
                    const componentName = match.toLowerCase();
                    const matchApi = api[componentName];
                    if (matchApi) {
                        const attrs = Object.keys(matchApi);
                        const completionItems = attrs.map(attr => {
                            const completionItem = new vscode_1.CompletionItem(attr, vscode_1.CompletionItemKind.Variable);
                            completionItem.detail = matchApi[attr];
                            return completionItem;
                        });
                        return completionItems;
                    }
                    return [];
                }
                return [];
            }
            return [];
        }
    }, " ", "\n");
    context.subscriptions.push(componentProvider, apiProvicer);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map