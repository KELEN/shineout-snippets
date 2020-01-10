"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const api = require("./api/index");
const snippets = require('./snippets.json');
function activate(context) {
    const provideCompletionItems = (document, position, token, context) => {
        var _a;
        const { activeTextEditor } = vscode_1.window;
        if (activeTextEditor) {
            const selectionPosition = (_a = activeTextEditor) === null || _a === void 0 ? void 0 : _a.selection.start;
            const start = new vscode_1.Position(selectionPosition.line, 0);
            const end = new vscode_1.Position(selectionPosition.line, selectionPosition.character);
            const rowText = document.getText(new vscode_1.Range(start, end));
            const keyIndex = rowText.lastIndexOf('so') || rowText.lastIndexOf('so-');
            if (keyIndex > -1) {
                const keys = Object.keys(snippets);
                return keys.map(key => {
                    const completionItem = new vscode_1.CompletionItem(snippets[key].prefix, vscode_1.CompletionItemKind.Snippet);
                    completionItem.insertText = new vscode_1.SnippetString(snippets[key].body[0]);
                    completionItem.documentation = new vscode_1.MarkdownString(`## ${snippets[key].prefix}\n${snippets[key].body[0]}`);
                    // completionItem.documentation = prettier(snippets[key].body[0])
                    completionItem.sortText = '\0';
                    completionItem.range = new vscode_1.Range(new vscode_1.Position(selectionPosition.line, keyIndex), new vscode_1.Position(selectionPosition.line, keyIndex));
                    return completionItem;
                });
            }
            else {
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
                                completionItem.detail = matchApi[attr];
                                completionItem.sortText = '\0';
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
        }
        return [];
    };
    const apiProvicerJs = vscode_1.languages.registerCompletionItemProvider(['javascript', 'typescript', 'javascriptreact', 'typescriptreact'], {
        provideCompletionItems
    });
    const completion = vscode_1.commands.registerTextEditorCommand('shineout.completion', (editor) => {
        vscode_1.commands.executeCommand('editor.action.triggerSuggest');
    });
    context.subscriptions.push(apiProvicerJs, completion);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map