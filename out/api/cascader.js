"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    'className': ["类型: string", "默认值: 无", "说明: 扩展className"],
    'clearable': ["类型: bool", "默认值: true", "说明: 是否显示清除数据图标"],
    'data': ["类型: array[{children:[]}]", "默认值: []", "说明: 数据，子节点为children，如果 children 值为 null 或 长度为 0 时，视为叶子节点"],
    'defaultValue': ["类型: array\\[key]", "默认值: 无", "说明: 默认选中的 key （非受控）"],
    'disabled': ["类型: boolean | function(d)", "默认值: false", "说明: 显示选择框时有效，为 true 时，所有节点禁用选择，为函数时，根据函数返回结果确定是否禁用"],
    'expandTrigger': ["类型: string", "默认值: 'click'", "说明: 节点展开触发方式，可选值为 \\['click', 'hover', 'hover-only']"],
    'keygen': ["类型: string | function(obj, parentKey):string", "默认值: 必填", "说明: 生成key的辅助方法<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d) => d.id"],
    'loader': ["类型: function(key, d)", "默认值: 无", "说明: 设置loader属性后，未定义children的节点视为动态加载节点，点击展开触发 loader事件，children 为 null 或者长度为 0 视为叶子节点"],
    'mode': ["类型: \\[0|1|2|3\\]", "默认值: 无", "说明: 选中值模式，未设置值为单选<br />0: 只返回完全选中的节点，包含父节点<br />1: 返回全部选中的节点和半选中的父节点<br />2: 只返回选中的子节点<br />3: 如果父节点选中，只返回父节点"],
    'onChange': ["类型: function(array)", "默认值: 无", "说明: 设置 onChange 属性时，显示 选择框。参数为当前选中值，和 mode 属性相关"],
    'onItemChange': ["类型: function(key, d)", "默认值: 无", "说明: 节点点击触发事件"],
    'renderItem': ["类型: string | function(d)", "默认值: 必填", "说明: 为 string 时，返回 d\\[string]<br />为 function 时，返回函数结果"],
    'renderResult': ["类型: string | function(d, result)", "默认值: renderItem", "说明: 选中后在结果中显示的内容，默认和 renderItem 相同。返回 null 则不展示，result 为当前选中的所有值。"],
    'value': ["类型: array\\[key]", "默认值: 无", "说明: 选中的 key （受控）"],
    'absolute': ["类型: bool", "默认值: false", "说明: 为 true 时，选项弹出层在 DOM 中独立 render"],
    'compressed': ["类型: bool", "默认值: false", "说明: 将选中值合并"],
    'childrenKey': ["类型: string", "默认值: 'children'", "说明: 指定子数据的属性名"]
};
//# sourceMappingURL=cascader.js.map