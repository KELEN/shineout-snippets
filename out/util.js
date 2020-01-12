"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const babylon_1 = require("babylon");
exports.getAst = (fileText) => {
    try {
        return babylon_1.parse(fileText, {
            sourceType: 'module',
            plugins: [
                'jsx',
                'flow',
                'doExpressions',
                'objectRestSpread',
                'decorators',
                'classProperties',
                'exportExtensions',
                'asyncGenerators',
                'functionBind',
                'functionSent',
                'dynamicImport'
            ]
        });
    }
    catch (error) {
        return undefined;
    }
};
//# sourceMappingURL=util.js.map