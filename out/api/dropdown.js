"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    'className': ["类型: string", "默认值: 无", "说明: 扩展className"],
    'columns': ["类型: number", "默认值: 无", "说明: 页面多元素展示,此属性需要依赖width属性,请合理的设置列数和宽度"],
    'data': ["类型: \\[]", "默认值: 必填", "说明: 下拉数据，详见data"],
    'disabled': ["类型: bool", "默认值: false", "说明: 禁用"],
    'onClick': ["类型: func", "默认值: 无", "说明: 点击事件。参数为渲染的数据, <br /> 注: 如果数据内设置了onClick，会忽略此方法，调用data.onClick"],
    'outline': ["类型: boolean", "默认值: false", "说明: 同 [Button](/components/Button)"],
    'placeholder': ["类型: string | ReactElement", "默认值: 必填", "说明: 按钮显示内容"],
    'renderItem': ["类型: func | string", "默认值: 'content'", "说明: 设置显示的内容,如果是字符串,则为对应的值<br />如果是函数,则返回值为显示的内容,参数为当条数据"],
    'size': ["类型: string", "默认值: 'default'", "说明: 同 [Button](/components/Button)"],
    'trigger': ["类型: string", "默认值: 'click'", "说明: 触发方式，可选值为 \\['click', 'hover']"],
    'type': ["类型: string", "默认值: 'default'", "说明: 可选值 \\['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'link']"],
    'width': ["类型: number", "默认值: 无", "说明: 弹出选项层的宽度"]
};
//# sourceMappingURL=dropdown.js.map