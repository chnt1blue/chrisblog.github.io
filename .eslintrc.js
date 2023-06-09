const path = require("path");
const basePath = path.resolve(__dirname, "./");

module.exports = {
  extends: [],
  env: {
    // 这里填入你的项目用到的环境
    // 它们预定义了不同环境的全局变量
    //
    browser: true,
    node: true,
    mocha: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    jsx: true,
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.15.0",
    },
  },
  globals: {
    // 这里填入你的项目需要的全局变量
    // false 表示这个全局变量不允许被重新赋值
    APP_ENV: false,
  },
  overrides: [],
};
