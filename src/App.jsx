import React from 'react';
import { ConfigProvider, Tabs, theme } from 'antd';
import DunyaIliskin from './DunyaIlıskın';
import Obsesif from './Obsesif';
import Padua from './Padua';
import Child from './Child';
import Young from './Young';

const App = () => {
  const tabs = [
    {
      label: 'Dünyaya İlişkin Varsayımlar Ölçeği',
      id: '0',
      children: <DunyaIliskin />
    },
    {
      label: 'Obsesif İnanışlar Ölçeği',
      id: '1',
      children: <Obsesif />
    },
    {
      label: 'Padua Envanteri',
      id: '2',
      children: <Padua />
    },
    {
      label: 'Çocukluk Çağı Travma Ölçeği',
      id: '3',
      children: <Child />
    },
    {
      label: 'Young-E',
      id: '4',
      children: <Young />
    },
  ]

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
