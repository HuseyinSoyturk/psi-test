import React, { useState } from 'react';
import { ConfigProvider, Spin, Tabs, theme } from 'antd';
import DunyaIliskin from './DunyaIlıskın';
import Obsesif from './Obsesif';
import Padua from './Padua';
import Child from './Child';
import Young from './Young';

const App = () => {
  const [loading, setloading] = useState(false)
  const tabs = [
    {
      label: 'Dünyaya İlişkin Varsayımlar Ölçeği',
      id: '0',
      children: <DunyaIliskin setloading={setloading} />
    },
    {
      label: 'Obsesif İnanışlar Ölçeği',
      id: '1',
      children: <Obsesif setloading={setloading} />
    },
    {
      label: 'Padua Envanteri',
      id: '2',
      children: <Padua setloading={setloading} />
    },
    {
      label: 'Çocukluk Çağı Travma Ölçeği',
      id: '3',
      children: <Child setloading={setloading} />
    },
    {
      label: 'Young-E',
      id: '4',
      children: <Young setloading={setloading} />
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
    {loading && <Spin fullscreen tip="Loading" size="large">
    </Spin>}
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
