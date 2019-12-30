"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const api = require("./api/index");
// import snippets from './snippets';
function activate(context) {
    console.log('Congrations Happy shineout coding!!');
    /**
     * api提示
     */
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
                            const completionItem = new vscode_1.CompletionItem(attr, vscode_1.CompletionItemKind.Property);
                            switch (context.triggerCharacter) {
                                case ' ':
                                    completionItem.range = new vscode_1.Range(new vscode_1.Position(position.line, position.character - 1), new vscode_1.Position(position.line, attr.length + position.character - 1));
                                    break;
                                default:
                                    break;
                            }
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
    }, " ");
    context.subscriptions.push(apiProvicer);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map