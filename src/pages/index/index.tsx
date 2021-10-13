import { FC } from 'react'
import { View, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import { AtButton, AtTabBar } from 'taro-ui'

import './index.scss'

interface PageProps {
  users: IndexModelState;
}

const Index: FC<PageProps> = ({ users }) => {
  console.log('modelProps数据', users);

  const buttonClick = () => {
    console.log('点击button');
  }
  
  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <AtButton type='primary' onClick={buttonClick}>按钮文案</AtButton>
      <AtTabBar 
        fixed
        tabList={[
          { title: '首页', iconType: 'home' },
          { title: '我的', iconType: 'user' }
        ]}
      />
    </View>
  );
};
export default connect(({ users }: { users: IndexModelState }) => ({ users }))(Index);
