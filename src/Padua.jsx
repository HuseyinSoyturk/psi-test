import React, { useState } from "react";
import { Button, Flex, Radio, Table, Typography } from 'antd';
import { Document, Packer, Paragraph, TextRun } from "docx";
import html2canvas from "html2canvas";
const { Title } = Typography;
import { saveAs } from 'file-saver';


const Padua = () => {

    const source = [
        {
          "index": 1,
          "sentence": "Paraya dokunduğum zaman ellerimin kirlendiğini hissederim.",
          "rate": 0
        },
        {
          "index": 2,
          "sentence": "Vücut sıvıları (ter, tükürük, idrar gibi) ile en ufak bir temasın bile giysilerimi kirleteceğini ve bir şekilde bana zarar vereceğini düşünürüm.",
          "rate": 0
        },
        {
          "index": 3,
          "sentence": "Bir nesneye yabancıların ya da bazı kimselerin dokunduğunu biliyorsam, ona dokunmakta zorlanırım.",
          "rate": 0
        },
        {
          "index": 4,
          "sentence": "Çöplere veya kirli şeylere dokunmakta zorlanırım.",
          "rate": 0
        },
        {
          "index": 5,
          "sentence": "Kirlenmekten ya da hastalanmaktan korktuğum için umumi tuvaletleri kullanmakta kaçınırım.",
          "rate": 0
        },
        {
          "index": 6,
          "sentence": "Hastalıklardan veya kirlenmekten korktuğum için umumi telefonları kullanmaktan kaçınırım.",
          "rate": 0
        },
        {
          "index": 7,
          "sentence": "Ellerimi gerektiğinden daha sık ve daha uzun süre yıkarım.",
          "rate": 0
        },
        {
          "index": 8,
          "sentence": "Bazen kendimi, sırf kirlenmiş olabileceğim ya da pis olduğum düşüncesiyle yıkanmak ya da temizlenmek zorunda hissediyorum.",
          "rate": 0
        },
        {
          "index": 9,
          "sentence": "Mikrop bulaşmış veya kirli olduğunu düşündüğüm bir şeye dokunursam hemen yıkanmam veya temizlenmem gerekir.",
          "rate": 0
        },
        {
          "index": 10,
          "sentence": "Bir hayvan bana değerse kendimi kirli hissederim ve hemen yıkanmam ya da elbiselerimi değiştirmem gerekir.",
          "rate": 0
        },
        {
          "index": 11,
          "sentence": "Giyinirken, soyunurken ve yıkanırken kendimi belirli bir sıra izlemek zorunda hissederim.",
          "rate": 0
        },
        {
          "index": 12,
          "sentence": "Uyumadan önce bazı şeyleri belli bir sırayla yapmak zorundayım.",
          "rate": 0
        },
        {
          "index": 13,
          "sentence": "Yatmadan önce, kıyafetlerimi özel bir şekilde asmalı ya da katlamalıyım.",
          "rate": 0
        },
        {
          "index": 14,
          "sentence": "Doğru dürüst yapıldığını düşünebilmem için yaptıklarımı bir kaç kez tekrarlamam gerekir.",
          "rate": 0
        },
        {
          "index": 15,
          "sentence": "Bazı şeyleri gereğinden daha sık kontrol etme eğilimindeyim.",
          "rate": 0
        },
        {
          "index": 16,
          "sentence": "Gaz ve su musluklarını, elektrik düğmelerini kapattıktan sonra tekrar tekrar kontrol ederim.",
          "rate": 0
        },
        {
          "index": 17,
          "sentence": "Düzgün kapatılıp kapatılmadıklarından emin olmak için eve dönüp kapıları, pencereleri ve çekmeceleri kontrol ederim.",
          "rate": 0
        },
        {
          "index": 18,
          "sentence": "Doğru doldurduğumdan emin olmak için formları, evrakları, ve çekleri ayrıntılı olarak tekrar tekrar kontrol ederim.",
          "rate": 0
        },
        {
          "index": 19,
          "sentence": "Kibrit, sigara vb’nin iyice söndürüldüğünü görmek için sürekli geri dönerim.",
          "rate": 0
        },
        {
          "index": 20,
          "sentence": "Elime para aldığım zaman birkaç kez tekrar sayarım.",
          "rate": 0
        },
        {
          "index": 21,
          "sentence": "Mektupları postalamadan önce bir çok kez dikkatlice kontrol ederim.",
          "rate": 0
        },
        {
          "index": 22,
          "sentence": "Aslında yaptığımı bildiğim halde, bazen yapmış olduğumdan emin olamam.",
          "rate": 0
        },
        {
          "index": 23,
          "sentence": "Okurken, önemli bir şeyi kaçırdığımdan dolayı geri dönmem, ve aynı pasajı iki veya üç kez okumam gerektiği izlenimine kapılırım.",
          "rate": 0
        },
        {
          "index": 24,
          "sentence": "Dalgınlığımın ve yaptığım küçük hataların felaketle sonuçlanacağını hayal ederim.",
          "rate": 0
        },
        {
          "index": 25,
          "sentence": "Bilmeden birini incittiğim konusunda çok fazla düşünürüm veya endişelenirim.",
          "rate": 0
        },
        {
          "index": 26,
          "sentence": "Bir felaket olduğunu duyduğum zaman onun bir şekilde benim hatam olduğunu düşünürüm.",
          "rate": 0
        },
        {
          "index": 27,
          "sentence": "Bazen sebepsiz yere kendime zarar verdiğime veya bir hastalığım olduğuna dair fazlaca endişelenirim.",
          "rate": 0
        },
        {
          "index": 28,
          "sentence": "Bıçak, hançer ve diğer sivri uçlu nesneleri gördüğümde rahatsız olur ve endişelenirim.",
          "rate": 0
        },
        {
          "index": 29,
          "sentence": "Bir intihar veya cinayet vakası duyduğumda, uzun süre üzülür ve bu konuda düşünmekten kendimi alamam.",
          "rate": 0
        },
        {
          "index": 30,
          "sentence": "Mikroplar ve hastalıklar konusunda gereksiz endişeler yaratırım.",
          "rate": 0
        },
        {
          "index": 31,
          "sentence": "Bir köprüden veya çok yüksek bir pencereden aşağı baktığımda kendimi boşluğa atmak için bir dürtü hissederim.",
          "rate": 0
        },
        {
          "index": 32,
          "sentence": "Yaklaşmakta olan bir tren gördüğümde, bazen kendimi trenin altına atabileceğimi düşünürüm.",
          "rate": 0
        },
        {
          "index": 33,
          "sentence": "Bazı belirli anlarda umuma açık yerlerde kıyafetlerimi yırtmak için aşırı bir istek duyarım.",
          "rate": 0
        },
        {
          "index": 34,
          "sentence": "Araba kullanırken, bazen arabayı birinin veya bir şeyin üzerine sürme dürtüsü duyarım.",
          "rate": 0
        },
        {
          "index": 35,
          "sentence": "Silah görmek beni heyecanlandırır ve şiddet içeren düşünceleri aklıma getirir.",
          "rate": 0
        },
        {
          "index": 36,
          "sentence": "Bazen hiçbir neden yokken bir şeyleri kırma ve zarar verme ihtiyacı hissederim.",
          "rate": 0
        },
        {
          "index": 37,
          "sentence": "Bazen işime yaramasa da, başkalarına ait olan şeyleri çalma dürtüsü hissederim.",
          "rate": 0
        },
        {
          "index": 38,
          "sentence": "Bazen süpermarketten bir şey çalmak için karşı konulmaz bir istek duyarım.",
          "rate": 0
        },
        {
          "index": 39,
          "sentence": "Bazen savunmasız çocuklara ve hayvanlara zarar vermek için bir dürtü hissederim.",
          "rate": 0
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
                    <Radio id={`radio_${index}_1`} value={0}>0</Radio>
                    <Radio id={`radio_${index}_2`} value={1}>1</Radio>
                    <Radio id={`radio_${index}_3`} value={2}>2</Radio>
                    <Radio id={`radio_${index}_4`} value={3}>3</Radio>
                    <Radio id={`radio_${index}_5`} value={4}>4</Radio>
                </Radio.Group>
            }
        }
    ];

    const handleDownload = () => {
        html2canvas(document.getElementById('table_2')).then(function (canvas) {
            canvas.toBlob((blob) => {
                saveAs(blob, "Padua Envanteri.png");
            });
        });
    }

    return <>
        <Title level={2} style={{ textAlign: 'center' }}>Padua Envanteri – 
Washington Eyalet Üniversitesi Gözden Geçirilmiş Formu 
(PE-WEÜG)</Title>
        <Title level={5}>0 = Hiç</Title>
        <Title level={5}>1 = Biraz</Title>
        <Title level={5}>2 = Oldukça</Title>
        <Title level={5}>3 = Çok</Title>
        <Title level={5}>4 = Çok Fazla</Title>
        <Table rowKey={({ index }) => index} id="table_2" dataSource={dataSource} columns={columns} pagination={false} />
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

export default Padua;