"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const apiProvider_1 = require("./apiProvider");
const util_1 = require("./util");
const snippets = require('./snippets.json');
const DOCS_URL = 'http://shineout-rc-docs-master-dev.dev.paas-dev.sheincorp.cn/1.6.x/cn/components/';
const components = ['Button', 'Dropdown', 'Icon', 'Image', 'Cascader', 'Checkbox', 'DatePicker', 'Form', 'Input', 'Radio',
    'Rate', 'Rule', 'Select', 'Slider', 'Switch', 'Textarea', 'TreeSelect', 'Upload',
    'Carousel', 'Pagination', 'Table', 'Tree', 'Alert', 'Message', 'Modal', 'Popover',
    'Progress', 'Spin', 'Tag', 'Tooltip', 'Card', 'Grid', 'Sticky', 'Tabs', 'Breadcrumb', 'Menu'
];
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
                    completionItem.documentation = util_1.getSnippetMarkdownString(snippets[key]);
                    completionItem.sortText = '\0';
                    completionItem.range = new vscode_1.Range(new vscode_1.Position(selectionPosition.line, keyIndex), new vscode_1.Position(selectionPosition.line, keyIndex));
                    return completionItem;
                });
            }
        }
        return [];
    };
    const SnippetCompletionItemProvider = vscode_1.languages.registerCompletionItemProvider(['javascript', 'typescript', 'javascriptreact', 'typescriptreact'], {
        provideCompletionItems
    });
    const triggerCompletion = vscode_1.commands.registerTextEditorCommand('shineout.completion', (editor) => {
        vscode_1.commands.executeCommand('editor.action.triggerSuggest');
    });
    const apiProvider = new apiProvider_1.default();
    const apiCompletionItemProvider = vscode_1.languages.registerCompletionItemProvider(['javascript', 'typescript', 'javascriptreact', 'typescriptreact'], apiProvider);
    const docsCommand = vscode_1.commands.registerCommand('shineout.docs', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(DOCS_URL + 'GetStart'));
    });
    components.forEach((component) => {
        context.subscriptions.push(vscode_1.commands.registerCommand(`shineout.${component}`.toLowerCase(), () => {
            vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(DOCS_URL + component));
        }));
    });
    context.subscriptions.push(SnippetCompletionItemProvider, apiCompletionItemProvider, triggerCompletion, docsCommand);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map