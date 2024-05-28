import React, { useState } from 'react';
import { Button, ConfigProvider, Input, Space, Tabs, theme } from 'antd';
import DunyaIliskin from './DunyaIlıskın';

const App = () => {
  const tabs = [
    {
      label: 'Dünyaya İlişkin Varsayımlar Ölçeği',
      id: '0',
      children: <DunyaIliskin />
    },
    {
      label: 'Obsesif İnanışlar Ölçeği',
      id: '1'
    },
    {
      label: 'Padua Envanteri',
      id: '2'
    },
    {
      label: 'Çocukluk Çağı Travma Ölçeği',
      id: '3'
    },
    {
      label: 'Young-E',
      id: '4'
    },
  ]

  // const [activeKey, setActiveKey] = useState('1')
  // const onKeyChange = (key) => {
  //   console.log(key);
  //   setActiveKey(key)
  // }
  return <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,
      token: {
        colorPrimary: '#00b96b',
      },
    }
    }
  >
    <Tabs
      // defaultActiveKey="0"
      // activeKey={activeKey}
      // onChange={onKeyChange}
      type="card"
      items={tabs.map((tab) => {
        return {
          label: tab.label,
          key: tab.id,
          children: tab.children || <>YAPIM ASAMASINDA</>,
        };
      })}
    />
  </ConfigProvider >
}

export default App
