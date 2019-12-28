"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    'accept': ["类型: string", "默认值: 无", "说明: 上传文件类型, 和标准一致, 详见[accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)"],
    'action': ["类型: string", "默认值: 必填", "说明: 上传地址"],
    'children': ["类型: any", "默认值: 必填", "说明: 上传占位内容"],
    'className': ["类型: string", "默认值: 无", "说明: 扩展className"],
    'defaultValue': ["类型: array", "默认值: 无", "说明: 默认值"],
    'headers': ["类型: object", "默认值: 无", "说明: 请求头部信息"],
    'htmlName': ["类型: string", "默认值: 无", "说明: 服务端接收的 filename，不填使用 name"],
    'limit': ["类型: number", "默认值: 100", "说明: 最大上传文件数"],
    'disabled': ["类型: bool", "默认值: false", "说明: 是否禁用上传行为"],
    'name': ["类型: string", "默认值: 无", "说明: Form 内存取数据的 key"],
    'request': ["类型: func(options)", "默认值: 无", "说明: 自定义上传方法<br /> options: 上传的配置"],
    'onChange': ["类型: func(values)", "默认值: 无", "说明: 值改变回调(上传成功，删除)<br />values: 数组, 其每个值是 onSuccess 的返回值"],
    'onSuccess': ["类型: func(res, file, data, xhr):value", "默认值: 无", "说明: 上传成功回调，返回结果作为新的 value<br />res: 上传接口返回结果<br />file: 选择的文件<br />data: 请求的数据<br />xhr: 返回的 response"],
    'onHttpError': ["类型: func(xhr):string", "默认值: 无", "说明: 上传失败时回调，返回结果作为错误内容提示"],
    'params': ["类型: object", "默认值: 无", "说明: 提交到服务端的额外参数"],
    'recoverAble': ["类型: bool", "默认值: false", "说明: 是否可以恢复已删除的value"],
    'renderResult': ["类型: func", "默认值: a => a", "说明: 结果展示"],
    'validator': ["类型: object", "默认值: 无", "说明: 上传前文件校验"],
    'value': ["类型: array", "默认值: \\[]", "说明: defaultValue 和 value 可以同时设置，defaultValue 会被value覆盖<br />在Form中，value会被表单接管，value无效"],
    'withCredentials': ["类型: bool", "默认值: false", "说明: 是否携带 cookie"],
    'multiple': ["类型: bool", "默认值: false", "说明: 是否支持多选文件"],
    'renderContent': ["类型: func(res, value, index, values)", "默认值: -", "说明: 自定义结果的内容"],
    'validatorHandle': ["类型: bool | func(error, file)", "默认值: false", "说明: 是否处理校验失败的情况, 如果提供一个函数, 则以函数的返回值判断是否处理此 error"],
    'drop': ["类型: bool", "默认值: false", "说明: 是否开启拖拽上传文件"]
};
//# sourceMappingURL=upload.js.map