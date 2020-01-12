import { parse } from 'babylon';

export const getAst = (fileText: string): File | undefined => {
  try {
    return parse(fileText, {
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
  } catch (error) {
    return undefined;
  }
};