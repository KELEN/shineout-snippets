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
  window,
  commands,
  SnippetString,
  MarkdownString,
} from 'vscode';
import _ from 'lodash';
import ApiProvider from './apiProvider';
import { getSnippetMarkdownString } from './util';
import webview from './webview';
const snippets = require('./snippets.json');

interface ISelectionPosition {
  line: number,
  character: number
}

export function activate(context: ExtensionContext) {
  console.log('welcome to the shineout happy codeing');
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
          completionItem.documentation = getSnippetMarkdownString(snippets[key]);
          completionItem.sortText = '\0';
          completionItem.range = new Range(new Position(selectionPosition.line, keyIndex), new Position(selectionPosition.line, keyIndex));
          return completionItem;
        })
      }
    }
    return [];
  }

  const SnippetCompletionItemProvider = languages.registerCompletionItemProvider(['javascript', 'typescript', 'javascriptreact', 'typescriptreact'], {
    provideCompletionItems
  });

  const triggerCompletion = commands.registerTextEditorCommand('shineout.completion', (editor) => {
    commands.executeCommand('editor.action.triggerSuggest');
  });

  const apiProvider = new ApiProvider();
  const apiCompletionItemProvider = languages.registerCompletionItemProvider(['javascript', 'typescript', 'javascriptreact', 'typescriptreact'], apiProvider);

  const docsCommand = commands.registerCommand('shineout.docs', webview)
  
  context.subscriptions.push(SnippetCompletionItemProvider, apiCompletionItemProvider, triggerCompletion, docsCommand);
}
