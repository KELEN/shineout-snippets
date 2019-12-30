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
} from 'vscode';

import * as api from './api/index';
// import snippets from './snippets';

export function activate(context: ExtensionContext) {

  console.log('Congrations Happy shineout coding!!');
  /**
   * api提示
   */
  const apiProvicer  = languages.registerCompletionItemProvider('javascript', {
    provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext): CompletionItem[] { 
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
              switch (context.triggerCharacter) {
                case ' ':
                  completionItem.range = new Range(new Position(position.line, position.character - 1), new Position(position.line, attr.length + position.character - 1));
                  break;
                default:
                  break;
              }
              completionItem.detail = matchApi[attr];
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
  }, " ");
	context.subscriptions.push(apiProvicer);
}
