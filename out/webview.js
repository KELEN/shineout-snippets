"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const prettier = require("prettier");
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    const panel = vscode_1.window.createWebviewPanel('docs', 'shineout文档', vscode_1.ViewColumn.One, {
        enableScripts: true,
        retainContextWhenHidden: true,
    });
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
  `, { semi: false, parser: 'babel' }) + '</code>';
});
//# sourceMappingURL=webview.js.map