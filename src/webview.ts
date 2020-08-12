import {
  window,
  ViewColumn,
} from 'vscode';
import * as prettier from 'prettier';
import { getWebContent } from './util';

export default async () => {

  const html = await getWebContent('https://shine.wiki/1.5.x/cn/index/');

  const panel = window.createWebviewPanel(
    'docs',
    'shineout文档',
    ViewColumn.One,
    {
      enableScripts: true,
      retainContextWhenHidden: true,
    }
  );

  console.log(html)
  panel.webview.html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>shineout</title>
  </head>
  <body>
    <iframe style="width: 100%; height: 100%;" src="https://shine.wiki/1.5.x/cn/index" />
  </body>
  </html>`;
}