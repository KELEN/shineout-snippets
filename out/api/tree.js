"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    'className': "类型: string\n默认值: 无\n说明: 扩展className",
    'onChange': "类型: function(array)\n默认值: 无\n说明: 设置 onChange 属性时，显示 选择框。参数为当前选中值，和 mode 属性相关",
    'data': "类型: array[{children:[]}]\n默认值: []\n说明: 数据，子节点为children，如果 children 值为 null 或 长度为 0 时，视为叶子节点",
    'defaultExpanded': "类型: array\\[key]\n默认值: 无\n说明: 默认展开的节点 key（非受控）",
    'disabled': "类型: boolean | function(d)\n默认值: false\n说明: 显示选择框时有效，为 true 时，所有节点禁用选择，为函数时，根据函数返回结果确定是否禁用",
    'expanded': "类型: array\\[key]\n默认值: 无\n说明: 展开的节点 key （受控）",
    'keygen': "类型: string | function(obj, parentKey):string\n默认值: 必填\n说明: 生成key的辅助方法<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d) => d.id",
    'line': "类型: boolean\n默认值: true\n说明: 是否显示连接线",
    'loader': "类型: function(key)\n默认值: 无\n说明: 设置loader属性后，未定义children的节点视为动态加载节点，点击展开触发 loader事件，children 为 null 或者长度为 0 视为叶子节点",
    'mode': "类型: \\[0|1|2|3|4]\n默认值: 1\n说明: 选中值模式<br />0: 只返回完全选中的节点，包含父节点<br />1: 返回全部选中的节点和半选中的父节点<br />2: 只返回选中的子节点<br />3: 如果父节点选中，只返回父节点",
    'onExpand': "类型: function(array)\n默认值: 无\n说明: 节点展开回调，参数为当前展开节点 key 数组",
    'renderItem': "类型: string | function(d)\n默认值: 必填\n说明: 为 string 时，返回 d\\[string]<br />为 function 时，返回函数结果",
    'defaultValue': "类型: array\\[key]\n默认值: 无\n说明: 默认选中的 key （非受控）",
    'value': "类型: array\\[key]\n默认值: 无\n说明: 选中的 key （受控）",
    'onDrop': "类型: function(data, key, targetKey, position)\n默认值: 无\n说明: 设置 onDrop 属性时，为可拖动状态<br />data: 拖动后重新排序的完整数据<br />key: 拖动的节点key<br />targetKey: 目标节点 key<br />position: 在目标节点的位置，以 0 开始",
    'defaultExpandAll': "类型: boolean\n默认值: false\n说明: 默认展开所有节点",
    'childrenKey': "类型: string\n默认值: 'children'\n说明: 指定子数据的属性名",
    'expandIcons': "类型: \\[Element, Element\\]\n默认值: 无\n说明: 自定义展开/收起按钮",
    'dragImageSelector': "类型: string: Selector | function(data)\n默认值: 无\n说明: 定义拖拽图片的选择器",
    'dragImageStyle': "类型: object\n默认值: 无\n说明: 拖拽图片的样式",
    'leafClass': "类型: string | function(data)\n默认值: 无\n说明: 叶子节点的 class, 函数的参数为该条叶子节点数据",
    'dragHoverExpand': "类型: bool\n默认值: false\n说明: 拖拽时自动展开含有子节点的节点",
    'doubleClickExpand': "类型: bool\n默认值: false\n说明: 双击是否展开节点",
    'onClick': "类型: func\n默认值: 无\n说明: 节点点击事件"
};
//# sourceMappingURL=tree.js.map