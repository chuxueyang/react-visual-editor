import React, { useState } from 'react';
import { Tabs } from 'antd/lib/index';
import PropsSettings from './propsSettings';
import StyleSettings from './styleSettings';
import {  SelectedInfoType, STATE_PROPS, useSelector } from 'brickd-core';
import { BrickTree } from 'bricks-web';
import styles from '../index.less'

const { TabPane } = Tabs;
type SettingPanelType={
  selectedInfo:SelectedInfoType
}
function SettingPanel() {
const {selectedInfo}=useSelector<SettingPanelType,STATE_PROPS>(['selectedInfo'])
  const [activeKey, setActiveKey] = useState('1');
const {props:selectProps}=selectedInfo||{}
  return (
    <Tabs
      onChange={(activeKey: any) => setActiveKey(activeKey)}
      activeKey={activeKey}
    >
      <TabPane forceRender key="1" tab={'组件树'}>
        <BrickTree className={styles['brick-tree']} />
      </TabPane>
      <TabPane forceRender key="2" tab={'属性配置'}>
        <PropsSettings propsSetting={selectProps} selectedInfo={selectedInfo}/>
      </TabPane>
      <TabPane forceRender key="3" tab={'样式配置'}>
        <StyleSettings styleSetting={selectProps&&selectProps.style}/>
      </TabPane>

    </Tabs>
  );
}

export default SettingPanel;
