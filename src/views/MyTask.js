import { Table, Tabs } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import * as React from 'react';
import { MyTaskTab } from '../Components/MyTaskTab/MyTaskTab';
import { TaskTable } from '../Components/TaskTable/TaskTable';

const {TabPane} = Tabs

export default function MyTask() {

  return (
      <Content>
        <MyTaskTab />
      </Content>
  
  )
}