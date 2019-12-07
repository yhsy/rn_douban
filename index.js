/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';

import MyHomePage from './MyHomePage.js'


import { name as appName } from './app.json';
// 当使用APPRegister注册项目的时候,方法中的第一个参数，不要改，否则项目废了
// 第二个参数，表示要把哪个页面注册为项目的首页
// 在RN中,只能使用.js作为组件的后缀名,不能使用.jsx

// AppRegistry.registerComponent(appName, () => App);
// 修改入口文件为自定义的首页
AppRegistry.registerComponent(appName, () => MyHomePage);


