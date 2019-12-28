'use strict';
exports.default = {
    accept: "类型: string\n默认值: 无\n说明: 上传文件类型, 和标准一致, 详见[accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)",
    action: "类型: string\n默认值: 必填\n说明: 上传地址",
    children: "类型: any\n默认值: 必填\n说明: 上传占位内容",
    className: "类型: string\n默认值: 无\n说明: 扩展className",
    defaultValue: "类型: array\n默认值: 无\n说明: 默认值",
    headers: "类型: object\n默认值: 无\n说明: 请求头部信息",
    htmlName: "类型: string\n默认值: 无\n说明: 服务端接收的 filename，不填使用 name",
    limit: "类型: number\n默认值: 100\n说明: 最大上传文件数",
    disabled: "类型: bool\n默认值: false\n说明: 是否禁用上传行为",
    name: "类型: string\n默认值: 无\n说明: Form 内存取数据的 key",
    request: "类型: func(options)\n默认值: 无\n说明: 自定义上传方法<br /> options: 上传的配置",
    onChange: "类型: func(values)\n默认值: 无\n说明: 值改变回调(上传成功，删除)<br />values: 数组, 其每个值是 onSuccess 的返回值",
    onSuccess: "类型: func(res, file, data, xhr):value\n默认值: 无\n说明: 上传成功回调，返回结果作为新的 value<br />res: 上传接口返回结果<br />file: 选择的文件<br />data: 请求的数据<br />xhr: 返回的 response",
    onHttpError: "类型: func(xhr):string\n默认值: 无\n说明: 上传失败时回调，返回结果作为错误内容提示",
    params: "类型: object\n默认值: 无\n说明: 提交到服务端的额外参数",
    recoverAble: "类型: bool\n默认值: false\n说明: 是否可以恢复已删除的value",
    renderResult: "类型: func\n默认值: a => a\n说明: 结果展示",
    validator: "类型: object\n默认值: 无\n说明: 上传前文件校验",
    value: "类型: array\n默认值: \[]\n说明: defaultValue 和 value 可以同时设置，defaultValue 会被value覆盖<br />在Form中，value会被表单接管，value无效",
    withCredentials: "类型: bool\n默认值: false\n说明: 是否携带 cookie",
    multiple: "类型: bool\n默认值: false\n说明: 是否支持多选文件",
    renderContent: "类型: func(res, value, index, values)\n默认值: -\n说明: 自定义结果的内容",
    validatorHandle: "类型: bool | func(error, file)\n默认值: false\n说明: 是否处理校验失败的情况, 如果提供一个函数, 则以函数的返回值判断是否处理此 error",
    drop: "类型: bool\n默认值: false\n说明: 是否开启拖拽上传文件"
};
nt, Element;
n默认值: 无;
n说明: 自定义展开 / 收起按钮;
",;
dragImageSelector: "类型: string: Selector | function(data)\n默认值: 无\n说明: 定义拖拽图片的选择器",
    dragImageStyle;
"类型: object\n默认值: 无\n说明: 拖拽图片的样式",
    leafClass;
"类型: string | function(data)\n默认值: 无\n说明: 叶子节点的 class, 函数的参数为该条叶子节点数据",
    dragHoverExpand;
"类型: bool\n默认值: false\n说明: 拖拽时自动展开含有子节点的节点",
    doubleClickExpand;
"类型: bool\n默认值: false\n说明: 双击是否展开节点",
    onClick;
"类型: func\n默认值: 无\n说明: 节点点击事件";
calAlign: "类型: string\n默认值: 'top'\n说明: 单元格内容垂直对齐方式，可选值为 \['top', 'middle'\]",
    rowClickAttr;
"类型: string | string[]\n默认值: \['*'\]\n说明: 设置行内元素的attribut来按需触发onRowClick, '*'表示接受行点击触发",
    sorter;
"类型: func\n默认值: alphaSort(Column.sorter, sorter)\n说明: 表格统一排序函数，参数分别为 Column.sorter 和 排序方式",
    treeExpandKeys;
"类型: array\n默认值: 无\n说明: 树形数据展开行，受控",
    hover;
"类型: bool\n默认值: true\n说明: 数据行鼠标悬浮高亮效果",
    onTreeExpand;
"类型: function(keys)\n默认值: 无\n说明: 展开行，keys为展开的行",
    treeEmptyExpand;
"类型: bool\n默认值: false\n说明: 树形表格子数据为空时依然展示展开按钮",
    treeCheckAll;
"类型: bool\n默认值: false\n说明: 全选时是否将子孙数据选中",
    onSortCancel;
"类型: func\n默认值: 无\n说明: 排序取消事件",
    radio;
"类型: bool\n默认值: false\n说明: 是否单选",
    rowEvents;
"类型: array\n默认值: 无\n说明: tr 事件监听器集合";
//# sourceMappingURL=api.js.map