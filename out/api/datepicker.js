"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    'className': "类型: string\n默认值: 无\n说明: 扩展className",
    'clearable': "类型: bool\n默认值: true\n说明: 是否可清空",
    'defaultValue': "类型: string | number | Date | array\n默认值: 无\n说明: 默认值。如果 defaultValue 和 format 类型不一致，会执行一次 format，并触发 onChange 事件返回 format 后的值",
    'disabled': "类型: bool | function\n默认值: false\n说明: 如果 disabled 为 true，禁用全部选项，如果 disabled 为函数，根据函数反回结果禁用选项",
    'format': "类型: string\n默认值: \n说明: 不同type对应的默认值<br />'date': 'yyyy-MM-dd'<br />'time': 'HH:mm:ss'<br />'week': 'RRRR II'<br />'month': 'yyyy-MM'<br />'datetime': 'yyyy-MM-dd HH:mm:ss'",
    'formatResult': "类型: string\n默认值: props.format\n说明: 对选中时间进行格式化",
    'onChange': "类型: function(d)\n默认值: \n说明: 值改变回调函数",
    'placeholder': "类型: string | array\n默认值: 无\n说明: 占位文字<br />range 属性不为空时，为长度为2的数组",
    'range': "类型: bool | number\n默认值: 无\n说明: 范围跨度，单位 **秒**，<br />为 true 时表示不限制选择范围。",
    'style': "类型: object\n默认值: 无\n说明: 最外层扩展样式",
    'type': "类型: string\n默认值: 'date'\n说明: 可选值为 \\['date', 'time', 'datetime', 'month', 'week']",
    'value': "类型: string | number | Date | array\n默认值: 无\n说明: 值。为 string 时，需要和 format 属性匹配。<br />range 属性为 true 时，值为长度为2的数组",
    'defaultTime': "类型: string\n默认值: 无\n说明: 选择日期时默认的时间, 格式为: 'HH:mm:ss'",
    'absolute': "类型: bool\n默认值: false\n说明: 为 true 时，选项弹出层在 DOM 中独立 render",
    'zIndex': "类型: number\n默认值: 1000\n说明: 选择面板 z-index 值",
    'allowSingle': "类型: boolean\n默认值: false\n说明: 是否允许单选, 仅在 range 模式下有效",
    'quickSelect': "类型: array<object>\n默认值: false\n说明: 快速选择, 仅在 range 模式下有效, name: 文字提示, value: 时间范围",
    'min': "类型: string | number | Date\n默认值: 无\n说明: 可选最小值，暂不支持 range 模式",
    'max': "类型: string | number | Date\n默认值: 无\n说明: 可选最大值，暂不支持 range 模式",
    'defaultRangeMonth': "类型: array:\\[date | number]\n默认值: 无\n说明: 范围选择的初始月份, 值为时间对象 或者时间戳, 仅在 range 模式下生效, 优先级低于 value 和 defaultValue"
};
//# sourceMappingURL=datepicker.js.map