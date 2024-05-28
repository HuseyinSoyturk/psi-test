import React, { useState } from "react";
import { Button, Flex, Radio, Table, Typography } from 'antd';
import { Document, Packer, Paragraph, TextRun } from "docx";
import html2canvas from "html2canvas";
const { Title } = Typography;
import { saveAs } from 'file-saver';


const DunyaIliskin = ({ setloading }) => {

    const source = [
        {
            "index": 1,
            "sentence": "İnsanlar doğaları gereği arkadaşlık ve nezaketten uzaktır.",
            "rate": 1
        },
        {
            "index": 2,
            "sentence": "Kötü olaylar insanlara tesadüfî olarak denk gelir.",
            "rate": 1
        },
        {
            "index": 3,
            "sentence": "İnsan doğası temelde iyidir.",
            "rate": 1
        },
        {
            "index": 4,
            "sentence": "Bu dünyada kötü olaylardan çok daha fazla iyi şey yaşanır.",
            "rate": 1
        },
        {
            "index": 5,
            "sentence": "Hayatımızın gidişatı büyük ölçüde tesadüflere bağlıdır.",
            "rate": 1
        },
        {
            "index": 6,
            "sentence": "İnsanlar genellikle yaşadıklarını hak ederler.",
            "rate": 1
        },
        {
            "index": 7,
            "sentence": "Sık sık, aslında iyi bir insan olmadığımı düşünüyorum.",
            "rate": 1
        },
        {
            "index": 8,
            "sentence": "Dünyada kötülükten çok iyilik vardır.",
            "rate": 1
        },
        {
            "index": 9,
            "sentence": "Temelde şanslı bir insanımdır.",
            "rate": 1
        },
        {
            "index": 10,
            "sentence": "İnsanların kötü kaderleri yaptıkları hatalardan kaynaklanır.",
            "rate": 1
        },
        {
            "index": 11,
            "sentence": "İnsanlar, bir başka insana ne olduğunu umursamazlar.",
            "rate": 1
        },
        {
            "index": 12,
            "sentence": "Genellikle, benim yararıma olan sonuçları çoğaltacak şekilde davranırım.",
            "rate": 1
        },
        {
            "index": 13,
            "sentence": "İnsanlar, eğer kendileri de iyiyse iyi bir talihe sahip olurlar.",
            "rate": 1
        },
        {
            "index": 14,
            "sentence": "Yaşam, tesadüflere bağlı belirsizliklerle doludur.",
            "rate": 1
        },
        {
            "index": 15,
            "sentence": "Çok şanslı bir insan olduğumu düşünürüm.",
            "rate": 1
        },
        {
            "index": 16,
            "sentence": "Hemen her zaman başıma kötü şeylerin gelmesini engellemek için çaba harcarım.",
            "rate": 1
        },
        {
            "index": 17,
            "sentence": "Kendime ilişkin olumsuz düşüncelere sahibim.",
            "rate": 1
        },
        {
            "index": 18,
            "sentence": "İyi insanlar, bu dünyada hak ettiklerini yaşarlar.",
            "rate": 1
        },
        {
            "index": 19,
            "sentence": "Kendi davranışlarımızla, başımıza kötü şeylerin gelmesini engelleyebiliriz.",
            "rate": 1
        },
        {
            "index": 20,
            "sentence": "Hayatıma baktığımda, şansın yüzüme güldüğünü fark ediyorum.",
            "rate": 1
        },
        {
            "index": 21,
            "sentence": "Eğer insanlar tedbirli davranırlarsa, pek çok talihsizliğin önüne geçilebilir.",
            "rate": 1
        },
        {
            "index": 22,
            "sentence": "Kendimi talihsizliklerden korumak için gerekli olan önlemleri alırım.",
            "rate": 1
        },
        {
            "index": 23,
            "sentence": "Genel olarak yaşam bir kumardır.",
            "rate": 1
        },
        {
            "index": 24,
            "sentence": "Dünya iyi bir yerdir.",
            "rate": 1
        },
        {
            "index": 25,
            "sentence": "İnsanlar temelde nazik ve yardımseverdir.",
            "rate": 1
        },
        {
            "index": 26,
            "sentence": "Genellikle, benim için en iyisi olacak şekilde davranırım.",
            "rate": 1
        },
        {
            "index": 27,
            "sentence": "Kendim olmaktan son derece memnunum.",
            "rate": 1
        },
        {
            "index": 28,
            "sentence": "Kötü şeyler olduğunda, bunun nedeni, genellikle insanların kendilerini korumak için gerekenleri yapmamasıdır.",
            "rate": 1
        },
        {
            "index": 29,
            "sentence": "Eğer yeterince yakından bakarsan, dünyanın iyiliklerle dolu olduğunu görürsün.",
            "rate": 1
        },
        {
            "index": 30,
            "sentence": "Kişisel özelliklerimden utanmak için nedenim var.",
            "rate": 1
        },
        {
            "index": 31,
            "sentence": "Pek çok insandan daha şanslıyım.",
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
                    <Radio id={`radio_${index}_6`} value={6}>6</Radio>
                </Radio.Group>
            }
        }
    ];

    const handleDownload = () => {
        setloading(true)
        html2canvas(document.getElementById('table_1'), { windowWidth: 1920 }).then(function (canvas) {
            canvas.toBlob((blob) => {
                saveAs(blob, "Dünyaya İlişkin Varsayımlar Ölçeği.png");
                setloading(false)
            });
        }).finally(() => setloading(false));
    }

    return <>
        <Title level={2} style={{ textAlign: 'center' }}>Dünyaya İlişkin Varsayımlar Ölçeği</Title>
        <Title level={5}>Aşağıda çeşitli ifadeler ve her bir ifadenin yanında 1’den 6’ya kadar rakamlar yer almaktadır. Her bir ifadeyi okuduktan sonra, o ifadeye ne derece katılıp katılmadığınızı belirtmek için, yanında yer alan bölmedeki uygun rakamı işaretleyiniz. Lütfen hiçbir cümleyi yanıtsız bırakmayınız.</Title>
        <Title level={5}>1 = Kesinlikle Katılmıyorum</Title>
        <Title level={5}>2 = Orta Düzeyde Katılmıyorum</Title>
        <Title level={5}>3 = Çok Az Katılmıyorum</Title>
        <Title level={5}>4 = Çok Az Katılıyorum</Title>
        <Title level={5}>5 = Oldukça Katılıyorum</Title>
        <Title level={5}>6 = Tamamen Katılıyorum</Title>
        <Table rowKey={({ index }) => index} id="table_1" dataSource={dataSource} columns={columns} pagination={false} />
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

export default DunyaIliskin;