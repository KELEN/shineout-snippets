import babelTraverse, { Scope } from 'babel-traverse';
import {
  JSXIdentifier,
  JSXOpeningElement,
  Node
} from 'babel-types';
import { CompletionItem, CompletionItemProvider, Position, TextDocument, CompletionItemKind } from 'vscode';
import * as api from './api';
import { getAst } from './util';


export default class SnippetsProvider implements CompletionItemProvider {

  private isReactComponent(jsxOpeningElement: JSXOpeningElement): boolean {
    const nameOfJsxTag = (<JSXIdentifier>jsxOpeningElement.name).name;
    return nameOfJsxTag[0] === nameOfJsxTag[0].toUpperCase();
  }

  private isCursorInJsxOpeningElement(
    cursorPosition: number,
    jsxOpeningElement: JSXOpeningElement
  ): boolean {
    console.log()
    return cursorPosition > jsxOpeningElement.start && cursorPosition < jsxOpeningElement.end;
  }

  private isCursorInJsxAttribute(cursorPosition: number, node: Node, scope: Scope): boolean {
    let result: boolean = false;
    babelTraverse(
      node,
      {
        JSXAttribute(path) {
          const jsxAttribute = path.node;
          if (cursorPosition > jsxAttribute.start && cursorPosition < jsxAttribute.end) {
            result = true;
          }
        }
      },
      scope
    );

    return result;
  }

  private getJsxOpeningElement(
    document: TextDocument,
    position: Position
  ): JSXOpeningElement | undefined {
    const documentText = document.getText();
    const cursorPosition = document.offsetAt(position);
    const ast = getAst(documentText);
    if (!ast) {
      return undefined;
    }
    let result: JSXOpeningElement | undefined;
    babelTraverse(ast, {
      JSXOpeningElement: path => {
        const jsxOpeningElement = path.node;
        const isCursorInJsxOpeningElement = this.isCursorInJsxOpeningElement(
          cursorPosition,
          jsxOpeningElement
        );
        const isCursorInJsxAttribute = this.isCursorInJsxAttribute(
          cursorPosition,
          jsxOpeningElement,
          path.scope
        );
        if (isCursorInJsxOpeningElement && !isCursorInJsxAttribute) {
          result = jsxOpeningElement;
        }
      }
    });

    return result;
  }

  async provideCompletionItems(
    document: TextDocument,
    position: Position
  ): Promise<CompletionItem[]> {
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
        const completionItem = new CompletionItem(attr, CompletionItemKind.Property);
        completionItem.detail = matchApi[attr];
        return completionItem;
      })
      return completionItems;
    }
    return [];
  }
}