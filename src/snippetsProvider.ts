import babelTraverse, { Scope } from 'babel-traverse';
import {
  JSXAttribute,
  JSXIdentifier,
  JSXOpeningElement,
  JSXSpreadAttribute,
  Node
} from 'babel-types';
import { CompletionItem, CompletionItemProvider, Position, TextDocument } from 'vscode';

export default class SnippetsProvider implements CompletionItemProvider {
  async provideCompletionItems(
    document: TextDocument,
    position: Position
  ): Promise<CompletionItem[]> {
    return [];
  }
}