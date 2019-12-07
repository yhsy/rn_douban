import React, { Component } from 'react';
import {
  View, // 布局组件,相当于Div
  Text, // 文本节点,所有文本必须要放到这里
  StyleSheet, // 样式相关的组件,专门用来创建样式
  Platform, // 用来提供平台检测功能的
  TextInput, // 文本框组件
  Image, // 图片组件
  Button, // 按钮组件
} from 'react-native';


const { OS, Version } = Platform;

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
      <View>
        <View style={styles.mHd}>
          {/* 所有的文本,必须要用RN提供的Text组件包裹,否则报错  */}
          <Text style={styles.title}>MyHomePage123</Text>
        </View>
        <View style={styles.mBd}>
          {/* 默认信息 */}
          <View style={styles.sysInfo}>
            <Text>{`os:${OS},version:${Version}`}</Text>
          </View>

          {/* 文本输入框 */}
          <View style={styles.mForm}>
            {/* 账号 */}
            <View style={styles.mInput}>
              <Text style={styles.label}>账号:</Text>
              <TextInput
                style={styles.input}
                defaultValue=""
                keyboardType="numeric"
                placeholder="请输入账号"
              ></TextInput>
            </View>
            {/* 密码 */}
            <View style={styles.mInput}>
              <Text style={styles.label}>密码:</Text>
              <TextInput
                style={styles.input}
                defaultValue=""
                keyboardType="numeric"
                placeholder="请输入密码"
                secureTextEntry={true}
              ></TextInput>
            </View>
          </View>

          <View style={styles.mImgs}>
            <View style={{ marginBottom: 10 }}>
              {/* 引入本地图片 */}
              <Image source={require('./imgs/avatar.jpg')} />
            </View>
            <View style={{ marginBottom: 10 }}>
              {/* 引入网络图片:一定要设置宽高,不然不显示 */}
              <Image
                source={{ uri: 'https://rn-douban-1252835029.cos.ap-shanghai.myqcloud.com/avatar2.jpg' }}
                style={{ width: 200, height: 200 }}
              />
            </View>

            <View style={styles.mBtns}>
              {/* 原生按钮组件,title和onPress属性必填 */}
              <Button
                title="这是一个按钮"
                color="#f00"
                onPress={() => { console.warn('123') }}
              ></Button>
            </View>

          </View>
        </View>
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
  },
  mBd: {

  },
  sysInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    // height: 300,
    height: 40,
    lineHeight: 40,
    fontSize: 30,
    backgroundColor: '#ccc',
  },
  mForm: {
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    // height: 40,
    // padding: 10,
    // backgroundColor: '#aaa',
  },
  mInput: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // height: 40,
    padding: 10,
    backgroundColor: '#aaa',
  },
  label: {
    marginRight: 10,
    lineHeight: 30,
  },
  input: {
    // width: '100%',
    width: 300,
    // height: 30,
    // lineHeight: 30,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  mImgs: {
    margin: 20,
    alignItems: 'center'
  },
  mBtns: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  btn1: {
    width: '100%',
    backgroundColor: '#f00',
    height: 50,
  }
})

export default MyHomePage;