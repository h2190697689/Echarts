/**
 * @desc  配置提交格式
 */
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
          2,
          'always',
          ["feat", "fix", "docs", "style", "refactor", "chore", "publish"]
        ],
        'subject-case': [0, 'never'],
    },
}