"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    'clearable': "类型: bool\n默认值: false\n说明: 是否可清除值",
    'multiple': "类型: bool\n默认值: false\n说明: 是否是多选",
    'data': "类型: array[{children:[]}]\n默认值: []\n说明: 数据，子节点为children，如果 children 值为 null 或 长度为 0 时，视为叶子节点",
    'value': "类型: string | array\n默认值: 无\n说明: 选中的 key （受控），多选时必须为array",
    'defaultValue': "类型: string | array\n默认值: 无\n说明: 初始值，多选时必须为array",
    'defaultExpanded': "类型: array\\[key]\n默认值: 无\n说明: 默认展开的节点 key（非受控）",
    'disabled': "类型: boolean | function(d)\n默认值: false\n说明: 为 true 时，所有节点禁用选择，为函数时，根据函数返回结果确定是否禁用",
    'filterDelay': "类型: number\n默认值: 400\n说明: 毫秒。用户输入触发 fitler 事件的延时",
    'name': "类型: string\n默认值: 无\n说明: Form 存取数据的名称",
    'keygen': "类型: string | function(obj):string | true\n默认值: 必填\n说明: 生成每一项key的辅助方法<br />为 true 时，以数据项本身作为key，相当于 (d => d)<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d => d.id)",
    'expanded': "类型: array\\[key]\n默认值: 无\n说明: 展开的节点 key （受控）",
    'loader': "类型: function(key)\n默认值: 无\n说明: 设置loader属性后，未定义children的节点视为动态加载节点，点击展开触发 loader事件，children 为 null 或者长度为 0 视为叶子节点",
    'mode': "类型: \\[0|1|2|3\\]\n默认值: 1\n说明: 选中值模式<br />0: 只返回完全选中的节点，包含父节点<br />1: 返回全部选中的节点和半选中的父节点<br />2: 只返回选中的子节点<br />3: 如果父节点选中，只返回父节点",
    'onExpand': "类型: function(array)\n默认值: 无\n说明: 节点展开回调，参数为当前展开节点 key 数组",
    'onChange': "类型: function(array)\n默认值: 无\n说明: 参数 为 当前选中值",
    'onFilter': "类型: function\n默认值: 无\n说明: onFilter 不为空时，可以输入过滤数据<br />onFilter 如果返回一个函数，使用这个函数做前端过滤<br />如果不返回，可以自行做后端过滤",
    'renderItem': "类型: string | function(d)\n默认值: 必填\n说明: 为 string 时，返回 d\\[string]<br />为 function 时，返回函数结果",
    'renderResult': "类型: function(d)\n默认值: renderItem\n说明: 选中后在结果中显示的内容，默认和 renderItem 相同",
    'compressed': "类型: bool\n默认值: false\n说明: 将选中值合并，只在多选模式下有效",
    'absolute': "类型: bool\n默认值: false\n说明: 为 true 时，选项弹出层在 DOM 中独立 render",
    'zIndex': "类型: number\n默认值: 1000\n说明: 选项列表 z-index 值",
    'childrenKey': "类型: string\n默认值: 'children'\n说明: 指定子数据的属性名",
    'defaultExpandAll': "类型: bool\n默认值: false\n说明: 默认全部展开节点"
};
//# sourceMappingURL=treeselect.js.map