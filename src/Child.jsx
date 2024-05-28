import React, { useState } from "react";
import { Button, Flex, Radio, Table, Typography } from 'antd';
import html2canvas from "html2canvas";
const { Title } = Typography;
import { saveAs } from 'file-saver';


const Child = ({ setloading }) => {

  const source = [
    {
      "index": 1,
      "sentence": "Evde yeterli yemek olmadığından aç kalırdım.",
      "rate": 1
    },
    {
      "index": 2,
      "sentence": "Benim bakımımı ve güvenliğimi üstlenen birinin olduğunu biliyordum.",
      "rate": 1
    },
    {
      "index": 3,
      "sentence": "Ailemdekiler bana “salak”, “beceriksiz” ya da “tipsiz” gibi sıfatlarla seslenirlerdi.",
      "rate": 1
    },
    {
      "index": 4,
      "sentence": "Anne ve babam ailelerine bakamayacak kadar sıklıkla sarhoş olur ya da uyuşturucu alırlardı.",
      "rate": 1
    },
    {
      "index": 5,
      "sentence": "Ailemde önemli ve özel biri olduğum duygusunu hissetmeme yardımcı olan biri vardı.",
      "rate": 1
    },
    {
      "index": 6,
      "sentence": "Yırtık, sökük ya da kirli giysiler içersinde dolaşmak zorunda kalırdım.",
      "rate": 1
    },
    {
      "index": 7,
      "sentence": "Sevildiğimi hissediyordum.",
      "rate": 1
    },
    {
      "index": 8,
      "sentence": "Anne ve babamın benim doğmuş olmamı istemediklerini düşünüyordum.",
      "rate": 1
    },
    {
      "index": 9,
      "sentence": "Ailemden birisi bana öyle kötü vurmuştu ki doktora ya da hastaneye gitmem gerekmişti.",
      "rate": 1
    },
    {
      "index": 10,
      "sentence": "Ailemde başka türlü olmasını istediğim birşey yoktu.",
      "rate": 1
    },
    {
      "index": 11,
      "sentence": "Ailemdekiler bana o kadar şiddetle vuruyorlardı ki vücudumda morartı ya da sıyrıklar oluyordu.",
      "rate": 1
    },
    {
      "index": 12,
      "sentence": "Kayış, sopa, kordon ya da başka sert bir cisimle vurularak cezalandırılıyordum.",
      "rate": 1
    },
    {
      "index": 13,
      "sentence": "Ailemdekiler birbirlerine ilgi gösterirlerdi.",
      "rate": 1
    },
    {
      "index": 14,
      "sentence": "Ailemdekiler bana kırıcı ya da saldırganca sözler söylerlerdi.",
      "rate": 1
    },
    {
      "index": 15,
      "sentence": "Vücutça kötüye kullanılmış olduğuma (dövülme, itilip kakılma vb.) inanıyorum.",
      "rate": 1
    },
    {
      "index": 16,
      "sentence": "Çocukluğum mükemmeldi.",
      "rate": 1
    },
    {
      "index": 17,
      "sentence": "Bana o kadar kötü vuruluyor ya da dövülüyordum ki öğretmen, komşu ya da bir doktorun bunu farkettiği oluyordu.",
      "rate": 1
    },
    {
      "index": 18,
      "sentence": "Ailemde birisi benden nefret ederdi.",
      "rate": 1
    },
    {
      "index": 19,
      "sentence": "Ailemdekiler kendilerini birbirlerine yakın hissederlerdi.",
      "rate": 1
    },
    {
      "index": 20,
      "sentence": "Birisi bana cinsel amaçla dokundu ya da kendisine dokunmamı istedi.",
      "rate": 1
    },
    {
      "index": 21,
      "sentence": "Kendisi ile cinsel temas kurmadığım takdirde beni yaralamakla ya da benim hakkımda yalanlar söylemekle tehdit eden birisi vardı.",
      "rate": 1
    },
    {
      "index": 22,
      "sentence": "Benim ailem dünyanın en iyisiydi.",
      "rate": 1
    },
    {
      "index": 23,
      "sentence": "Birisi beni cinsel şeyler yapmaya ya da cinsel şeylere bakmaya zorladı.",
      "rate": 1
    },
    {
      "index": 24,
      "sentence": "Birisi bana cinsel tacizde bulundu.",
      "rate": 1
    },
    {
      "index": 25,
      "sentence": "Duygusal bakımdan kötüye kullanılmış olduğuma (hakaret, aşağılama vb.) inanıyorum.",
      "rate": 1
    },
    {
      "index": 26,
      "sentence": "İhtiyacım olduğunda beni doktora götürecek birisi vardı.",
      "rate": 1
    },
    {
      "index": 27,
      "sentence": "Cinsel bakımdan kötüye kullanılmış olduğuma inanıyorum.",
      "rate": 1
    },
    {
      "index": 28,
      "sentence": "Ailem benim için bir güç̧ ve destek kaynağı idi.",
      "rate": 1
    }
  ]

  const [dataSource, setDataSource] = useState(source)

  const columns = [
    {
      title: 'Sıra',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: 'Soru',
      dataIndex: 'sentence',
      key: 'sentence',
    },
    {
      title: 'Cevap',
      dataIndex: 'rate',
      key: 'rate',
      render: (checked, { rate, index }) => {
        const handleChange = (value) => {
          const newDataSource = [...dataSource]
          const sentenceData = newDataSource.find(obj => obj.index === index)
          if (sentenceData) {
            sentenceData.rate = value;
            setDataSource(newDataSource);
          }
        }

        return <Radio.Group key={index} onChange={(e) => handleChange(e.target.value)} value={rate}>
          <Radio id={`radio_${index}_1`} value={1}>1</Radio>
          <Radio id={`radio_${index}_2`} value={2}>2</Radio>
          <Radio id={`radio_${index}_3`} value={3}>3</Radio>
          <Radio id={`radio_${index}_4`} value={4}>4</Radio>
          <Radio id={`radio_${index}_5`} value={5}>5</Radio>
        </Radio.Group>
      }
    }
  ];

  const handleDownload = () => {
    setloading(true)
    html2canvas(document.getElementById('table_4'), { windowWidth: 1920 }).then(function (canvas) {
      canvas.toBlob((blob) => {
        saveAs(blob, "Çocukluk Çağı Travma Ölçeği.png");
        setloading(false)
      });
    }).finally(() => setloading(false));
  }

  return <>
    <Title level={2} style={{ textAlign: 'center' }}>Çocukluk Çağı Travma Ölçeği</Title>
    <Title level={5}>Bu sorular çocukluğunuzda ve ilk gençliğinizde (20 yaşından önce) başınıza gelmiş olabilecek bazı olaylar hakkındadır. Her bir soru için sizin durumunuza uyan rakamı daire içersine alarak işaretleyiniz. Sorulardan bazıları özel yaşamınızla ilgilidir; lütfen elinizden geldiğince gerçeğe uygun yanıt veriniz.</Title>
    <Title level={5}>1 = Hiç Bir Zaman</Title>
    <Title level={5}>2 = Nadiren </Title>
    <Title level={5}>3 = Kimi zaman</Title>
    <Title level={5}>4 = Sık olarak </Title>
    <Title level={5}>5 = Çok sık</Title>
    <Title level={5}>Çocukluğumda ya da ilk gençliğimde... </Title>
    <Table rowKey={({ index }) => index} id="table_4" dataSource={dataSource} columns={columns} pagination={false} />
    <Flex style={{ marginTop: '10px' }} wrap gap="small" justify="flex-end" >
      <Button type="primary" danger onClick={() => { setDataSource(source) }}>
        Sıfırla
      </Button>
      <Button onClick={handleDownload} type="primary" >
        Mevcut Halini İndir
      </Button>
    </Flex>

  </>
}

export default Child;