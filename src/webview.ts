import {
  window,
  ViewColumn,
} from 'vscode';
import * as prettier from 'prettier';

export default async () => {
  const panel = window.createWebviewPanel(
    'docs',
    'shineout文档',
    ViewColumn.One,
    {
      enableScripts: true,
      retainContextWhenHidden: true,
    }
  );
  panel.webview.html = '<code>' + prettier.format(`
  /**
   * cn - 基本用法
   *    -- 组件调用通过 json 数据配置
   * en - Base
   *    -- The basic usage.
   */

  import React from 'react'
  import { Link } from 'react-router-dom'
  import { Breadcrumb, Message } from 'shineout'

  const data = [
    [{ title: 'Home', url: '#home' }, { title: 'aaa', url: '#aaa' }, { title: 'bbb', url: '#bbb' }],
    { title: <Link to="/components/Button">Button</Link> },
    { title: 'Self', onClick: () => Message.show('Clicked self') },
  ]

  export default function() {
    return <Breadcrumb data={data} />
  }
  `, { semi: false, parser: 'babel' }) + '</code>'
}