import {
  languages,
  TextDocument,
  Position,
  ExtensionContext,
  CancellationToken,
  CompletionContext,
  CompletionItem,
  CompletionItemKind,
  Range,
  TextEditor,
  window,
  commands,
  SnippetString,
  MarkdownString,
  ViewColumn
} from 'vscode';
import * as api from './api/index';
import _ from 'lodash';
import * as prettier from 'prettier';
const snippets = require('./snippets.json');

interface ISelectionPosition {
  line: number,
  character: number
}

export function activate(context: ExtensionContext) {
  const provideCompletionItems = (document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext): CompletionItem[] => {
    const { activeTextEditor } = window;
    if (activeTextEditor) {
      const selectionPosition: ISelectionPosition = activeTextEditor?.selection.start;
      const start = new Position(selectionPosition.line, 0);
      const end = new Position(selectionPosition.line, selectionPosition.character);
      const rowText = document.getText(new Range(start, end));
      const keyIndex = rowText.lastIndexOf('so') || rowText.lastIndexOf('so-');
      if (keyIndex > -1) {
        const keys = Object.keys(snippets);
        return keys.map(key => {
          const completionItem = new CompletionItem(snippets[key].prefix, CompletionItemKind.Snippet);
          completionItem.insertText = new SnippetString(snippets[key].body[0]);
          completionItem.documentation = new MarkdownString(`## ${snippets[key].prefix}\n${snippets[key].body[0]}`);
          // completionItem.documentation = prettier(snippets[key].body[0])
          completionItem.sortText = '\0';
          completionItem.range = new Range(new Position(selectionPosition.line, keyIndex), new Position(selectionPosition.line, keyIndex));
          return completionItem;
        })
      } else {
        const start: Position = new Position(0, 0);
        const range: Range = new Range(start, position);
        const text = document.getText(range);
        // import方式引入
        const importRegex = /import.*from.+shineout/g;
        const componentRegex = /<([A-Z][a-zA-Z0-9]*)\b[^<>]*$/g;
        if (importRegex.test(text) && componentRegex.test(text)) {
          const match = RegExp.$1;
          if (match) {
            const componentName: string = match.toLowerCase();
            const matchApi = api[componentName]
            if (matchApi) {
              const attrs = Object.keys(matchApi);
              const completionItems = attrs.map(attr => {
                const completionItem = new CompletionItem(attr, CompletionItemKind.Property);
                completionItem.detail = matchApi[attr];
                completionItem.sortText = '\0';
                return completionItem;
              })
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
  }

  const apiProvicerJs = languages.registerCompletionItemProvider(['javascript', 'typescript', 'javascriptreact', 'typescriptreact'], {
    provideCompletionItems
  });

  const completion = commands.registerTextEditorCommand('shineout.completion', (editor) => {
    commands.executeCommand('editor.action.triggerSuggest');
  });

  context.subscriptions.push(apiProvicerJs, completion);
}
