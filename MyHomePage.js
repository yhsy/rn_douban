import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyHomePage extends Component {
  // constructor: 一般都要写出来(一般都要挂载数据)
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 必须要有render 函数
  render () {
    // 1.在RN中,不能使用网页中的所有标签
    // 2.如果想要实现布局,RN提供了 View的组件,来实现布局;
    // 3.RN提供了一系列基础的组件，来方便程序员的开发，如果想要使用这些组件,只需把组件从'react-native'中导入即可
    return (
      <View style={styles.mHd}>
        {/* 所有的文本,必须要用RN提供的Text组件包裹,否则报错  */}
        <Text style={styles.title}>MyHomePage123</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mHd: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#f00',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  }
})

export default MyHomePage;