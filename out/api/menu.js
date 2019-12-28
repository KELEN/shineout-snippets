"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    'data': "类型: array\n默认值: []\n说明: 需要渲染成菜单的数据",
    'disabled': "类型: function\n默认值: d => d.disabled\n说明: 是否禁用选项",
    'mode': "类型: string\n默认值: 'inline'\n说明: 菜单样式,提供 'inline', 'vertical', 'horizontal'三种",
    'renderItem': "类型: string | function\n默认值: 'title'\n说明: 元素渲染方式,如果为字符串,则会以对应的值作为显示内容;如果为函数,则以函数返回的结果作为显示内容,函数参数为对应的数据对象",
    'keygen': "类型: string | function(obj):string | true\n默认值: 必填\n说明: 生成每一项key的辅助方法<br />为 true 时，以数据项本身作为key，相当于 (d => d)<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d => d.id)",
    'active': "类型: function\n默认值: null\n说明: 验证是否激活,参数为对应的数据对象,返回true则代表该菜单激活",
    'defaultOpenKeys': "类型: array\n默认值: []\n说明: 初始展开的菜单;如果需要设置此值,则需要设置keygen,此值为一个包含key的数组",
    'openKeys': "类型: array\n默认值: []\n说明: 展开的菜单(受控)",
    'onClick': "类型: function\n默认值: null\n说明: 子菜单点击事件,参数为当条数据",
    'style': "类型: object\n默认值: 无\n说明: 最外层扩展样式",
    'inlineIndent': "类型: number\n默认值: 24\n说明: 每一层缩进宽度",
    'linkKey': "类型: string\n默认值: 无\n说明: 需要注入子菜单的链接键值"
};
//# sourceMappingURL=menu.js.map