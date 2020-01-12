"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const snippetsProvider_1 = require("./snippetsProvider");
const snippets = require('./snippets.json');
function activate(context) {
    console.log('welcome to the shineout happy codeing');
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
        }
        return [];
    };
    const apiProvicerJs = vscode_1.languages.registerCompletionItemProvider(['javascript', 'typescript', 'javascriptreact', 'typescriptreact'], {
        provideCompletionItems
    });
    const triggerCompletion = vscode_1.commands.registerTextEditorCommand('shineout.completion', (editor) => {
        vscode_1.commands.executeCommand('editor.action.triggerSuggest');
    });
    const snippetsProvider = new snippetsProvider_1.default();
    const snippetProvider = vscode_1.languages.registerCompletionItemProvider(['javascript', 'typescript', 'javascriptreact', 'typescriptreact'], snippetsProvider);
    context.subscriptions.push(apiProvicerJs, snippetProvider, triggerCompletion);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map