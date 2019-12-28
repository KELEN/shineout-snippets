"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    'align': "类型: string\n默认值: 'left'\n说明: 可选值为 \\['left', 'center', 'right']",
    'className': "类型: string\n默认值: 无\n说明: 扩展className",
    'current': "类型: number\n默认值: 无\n说明: 当前页，如果传入值，组件为受控组件，必须通过onChange来处理回调",
    'defaultCurrent': "类型: number\n默认值: 1\n说明: 初始页码",
    'disabled': "类型: bool\n默认值: false\n说明: 禁用",
    'layout': "类型: array\n默认值: \\['links']\n说明: 子组件布局，可选值为:<br />'links': 页码<br />'simple': 简约页码(和links不要同时使用)<br />'list': 每页数量选择<br />'jumper': 跳转页码<br />function({ current, total, pageSize }): 匿名函数，用来信息展示",
    'onChange': "类型: function(current, pageSize)\n默认值: 无\n说明: 页码或每页显示数量改变时回调<br />current: 新的页码<br />pageSize: 每页数量",
    'pageSize': "类型: number\n默认值: 10\n说明: 每页数量",
    'pageSizeList': "类型: number\\[]\n默认值: \\[10, 20, 30, 50, 100]\n说明: 每页数量可选列表",
    'size': "类型: string\n默认值: 'default'\n说明: 可选值 \\['large', 'default', 'small']",
    'text': "类型: object\n默认值: 无\n说明: 替换文案<br />prev: 上一页<br />next: 下一页<br />page: pageSizeList文字<br />jumper: 跳转输入框文字, '{input}' 为输入框占位",
    'total': "类型: number\n默认值: 0\n说明: 总条目数。如果 total 小于 0，隐藏分页。",
    'sizeListProps': "类型: object\n默认值: 无\n说明: 需要给分页数量的选择框的额外的属性"
};
//# sourceMappingURL=pagination.js.map