import { ESLintUtils } from '@typescript-eslint/utils';

export const createRule = ESLintUtils.RuleCreator((name) => `https://github.com/nghive/eslint-plugin/docs/rules/${name}.md`);
