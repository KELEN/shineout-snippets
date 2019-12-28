"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    'background': ["类型: string", "默认值: '#fff'", "说明: 弹出层背景色（含箭头）"],
    'visible': ["类型: bool", "默认值: 无", "说明: 是否显示(受控)"],
    'onVisibleChange': ["类型: func", "默认值: 无", "说明: 显示隐藏改变时事件"],
    'mouseEnterDelay': ["类型: number", "默认值: 0", "说明: 移入显示延迟(毫秒)"],
    'mouseLeaveDelay': ["类型: number", "默认值: 500", "说明: 移除隐藏延迟(毫秒)"],
    'border': ["类型: string", "默认值: '#dee2e6'", "说明: 弹出层边框颜色（含箭头）"],
    'className': ["类型: string", "默认值: 无", "说明: 扩展className"],
    'children': ["类型: ReactElement", "默认值: 必填", "说明: 弹出显示内容"],
    'onClose': ["类型: function", "默认值: 无", "说明: Popover 关闭时回调事件"],
    'onOpen': ["类型: function", "默认值: 无", "说明: Popover 弹出回调事件"],
    'position': ["类型: string", "默认值: 'top'", "说明: 弹出层位置，可选值为 \\['top-left', 'top', 'top-right', 'left-top', 'left', 'left-bottom', 'right-top', 'right', 'right-bottom', 'bottom-left', 'bottom', 'bottom-right']"],
    'style': ["类型: object", "默认值: 无", "说明: 最外层扩展样式"],
    'trigger': ["类型: string", "默认值: 'hover'", "说明: 触发方式，可选值为 \\['click', 'hover']"],
    'type': ["类型: string", "默认值: 无", "说明: 可选值为，\\['success', 'info', 'warning', 'danger']"],
    '* content': ["类型: ReactElement | function", "默认值: ", "说明: 旧接口，如果content为空，父组件作为触发元素"]
};
//# sourceMappingURL=popover.js.map