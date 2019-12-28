"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    'data': "类型: Array\n默认值: []\n说明: 面包屑对象数组，见 data",
    'separator': "类型: String|ReactNode\n默认值: \"/\"\n说明: 面包屑分隔符,可以是字符串或自定义的元素",
    'keygen': "类型: string | function(obj):string | true\n默认值: 必填\n说明: 生成每一项key的辅助方法<br />为 true 时，以数据项本身作为key，相当于 (d => d)<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d => d.id)"
};
//# sourceMappingURL=breadcrumb.js.map