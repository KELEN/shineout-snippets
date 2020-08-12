import { parse } from 'babylon';
import { MarkdownString } from 'vscode';
import axios from 'axios';
export interface ISnippterItem {
  body: Array<string>,
  prefix: string,
  description: string,
}

export const getAst = (fileText: string): File | undefined => {
  try {
    return parse(fileText, {
      sourceType: 'module',
      plugins: [
        'jsx',
        'flow',
        'doExpressions',
        'objectRestSpread',
        'decorators',
        'classProperties',
        'exportExtensions',
        'asyncGenerators',
        'functionBind',
        'functionSent',
        'dynamicImport'
      ]
    });
  } catch (error) {
    return undefined;
  }
};

/**
 * get markdown template string
 * @param snippter 
 */
export const getSnippetMarkdownString = (snippter : ISnippterItem) : MarkdownString => {
  const reg = /\$\{[\d]+:([^\}]+)\}.*?/g;
  const mk = new MarkdownString();
  let text = snippter.body[0];
  text = text.replace(reg, function(match, value) {
    return value;
  });
  mk.appendMarkdown(`## ${snippter.description}`);
  mk.appendCodeblock(text)
  return mk;
}

export const getWebContent = async (path) => {
  const getContentRet = await axios.get(path);
  if (getContentRet.status === 200) {
    return getContentRet.data;
  } else {
    return 'Error'
  }
}