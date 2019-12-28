"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    'className': ["类型: string", "默认值: 无", "说明: 扩展className", "可用版本: "],
    'bodyStyle': ["类型: object", "默认值: -", "说明: 扩展 modal body 的样式", "可用版本: "],
    'footer': ["类型: ReactElement | Array | null", "默认值: 无", "说明: 底部内容", "可用版本: "],
    'maskCloseAble': ["类型: bool", "默认值: true", "说明: 点击遮罩层是否关闭对话框", "可用版本: "],
    'maskOpacity': ["类型: number", "默认值: 0.25", "说明: 遮罩层透明度", "可用版本: "],
    'padding': ["类型: number|string", "默认值: 16", "说明: 内容内边距", "可用版本: "],
    'position': ["类型: string", "默认值: 无", "说明: 弹出位置，可选值为 \\['top', 'right', 'bottom', 'left']", "可用版本: "],
    'style': ["类型: object", "默认值: 无", "说明: 最外层扩展样式", "可用版本: "],
    'title': ["类型: string | ReactElement", "默认值: 无", "说明: 弹出层的标题", "可用版本: "],
    'usePortal': ["类型: bool", "默认值: true", "说明: 为 true 时，使用 ReactDOM.createPortal 创建弹出层，为 false 时，使用 ReactDOM.render", "可用版本: "],
    'visible': ["类型: bool", "默认值: false", "说明: 是否显示", "可用版本: "],
    'width': ["类型: number | string", "默认值: 500", "说明: 对话框宽度", "可用版本: "],
    'zIndex': ["类型: number", "默认值: 1050", "说明: 对话框 z-index 值，注意：如 Modal 嵌套 Select 组件，并且 Select 组件含有 absolute 字段，需要修改 Select 的 z-index的值", "可用版本: "],
    'rootClassName': ["类型: string", "默认值: -", "说明: modal 的根元素类名, 为遮罩层的父元素", "可用版本: 1.4.2"],
    'container': ["类型: () => HTMLElement | HTMLElement", "默认值: document.body", "说明: 渲染的目标节点", "可用版本: "]
};
//# sourceMappingURL=modal.js.map