import { FC } from 'react'
import { View, Text } from '@tarojs/components'
import { connect } from 'react-redux'

import './index.scss'

interface PageProps {
  users: IndexModelState;
}

const Index: FC<PageProps> = ({ users }) => {
  console.log('modelProps数据', users);

  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  );
};
export default connect(({ users }: { users: IndexModelState }) => ({ users }))(Index);