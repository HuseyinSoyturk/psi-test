import React, { useState } from "react";
import { Button, Flex, Radio, Table, Typography } from 'antd';
import { Document, Packer, Paragraph, TextRun } from "docx";
import html2canvas from "html2canvas";
const { Title } = Typography;
import { saveAs } from 'file-saver';


const Obsesif = ({ setloading }) => {

    const source = [
        {
            "index": 1,
            "sentence": "Çevremdeki şeylerin genellikle tehlikeli olduklarını düşünürüm.",
            "rate": 1
        },
        {
            "index": 2,
            "sentence": "Bir şeyden tam olarak emin değilsem hata yapmam kaçınılmazdır.",
            "rate": 1
        },
        {
            "index": 3,
            "sentence": "Benim kendi ölçütlerime göre her şey mükemmel olmak zorundadır.",
            "rate": 1
        },
        {
            "index": 4,
            "sentence": "Değerli bir insan olabilmek için yaptığım her şeyde mükemmel olmak zorundayım.",
            "rate": 1
        },
        {
            "index": 5,
            "sentence": "Fırsatını bulduğum zaman kötü şeylerin olmasını engellemek için harekete geçmem gerekir.",
            "rate": 1
        },
        {
            "index": 6,
            "sentence": "Zarar görme olasılığı olmasa bile her ne pahasına olursa olsun zararı engellemeye çalışmam gerekir.",
            "rate": 1
        },
        {
            "index": 7,
            "sentence": "Bana göre kötü isteklere sahip olmak, onları gerçekten yapmak kadar kötüdür.",
            "rate": 1
        },
        {
            "index": 8,
            "sentence": "Tehlikeyi önceden gördüğümde harekete geçmezsem her türlü sonuçtan ben sorumlu olurum.",
            "rate": 1
        },
        {
            "index": 9,
            "sentence": "Bir şeyi mükemmel şekilde yapamayacaksam onu hiçbir şekilde yapmamalıyım.",
            "rate": 1
        },
        {
            "index": 10,
            "sentence": "Her zaman bütün potansiyelimi kullanmak zorundayım.",
            "rate": 1
        },
        {
            "index": 11,
            "sentence": "Bir duruma ilişkin olası bütün sonuçları dikkate almak benim için önemlidir.",
            "rate": 1
        },
        {
            "index": 12,
            "sentence": "Küçük hatalar bile bir işin tamamlanmadığı anlamına gelir.",
            "rate": 1
        },
        {
            "index": 13,
            "sentence": "Sevdiklerim hakkında saldırgan düşüncelere ve dürtülere sahipsem, bu benim içten içe onlara zarar vermek isteyebileceğim anlamına gelir.",
            "rate": 1
        },
        {
            "index": 14,
            "sentence": "Kararlarımdan emin olmak zorundayım.",
            "rate": 1
        },
        {
            "index": 15,
            "sentence": "Gündelik karşılaşılabilecek her türlü durumda, zarara engel olamamak kasten zarara sebep olmak kadar kötüdür.",
            "rate": 1
        },
        {
            "index": 16,
            "sentence": "Ciddi problemlerden (örneğin, hastalık veya kazalar) kaçınmak benim açımdan sürekli çaba harcamayı gerektirir.",
            "rate": 1
        },
        {
            "index": 17,
            "sentence": "Benim için bir zararı engellememek zarara neden olmak kadar kötüdür.",
            "rate": 1
        },
        {
            "index": 18,
            "sentence": "Bir hata yaparsam üzüntü duymam gerekir.",
            "rate": 1
        },
        {
            "index": 19,
            "sentence": "Benim kararlarımın veya yaptıklarımın olumsuz sonuçlarının başkalarına herhangi bir zarar vermeyeceğinden emin olmam gerekir.",
            "rate": 1
        },
        {
            "index": 20,
            "sentence": "Bana göre mükemmel olmayan şeyler doğru değildir.",
            "rate": 1
        },
        {
            "index": 21,
            "sentence": "Müstehcen düşüncelere sahip olmak korkunç bir insan olduğum anlamına gelir.",
            "rate": 1
        },
        {
            "index": 22,
            "sentence": "Ekstra önlemler almazsam, ciddi bir kaza geçirme veya ciddi bir kazaya neden olma olasılığım bir başkasına göre çok daha fazladır.",
            "rate": 1
        },
        {
            "index": 23,
            "sentence": "Kendimi güvende hissedebilmek için ters gidebilecek herhangi bir şeye olabildiğince hazırlıklı olmak zorundayım.",
            "rate": 1
        },
        {
            "index": 24,
            "sentence": "Tuhaf veya tiksinti uyandıran düşüncelerim olmamalı.",
            "rate": 1
        },
        {
            "index": 25,
            "sentence": "Benim için bir hata yapmak tümüyle başarısız olmak kadar kötüdür.",
            "rate": 1
        },
        {
            "index": 26,
            "sentence": "Küçük meselelerde bile her şeyin açıkça belirlenmiş olması önemlidir.",
            "rate": 1
        },
        {
            "index": 27,
            "sentence": "Dine aykırı bir düşünceye sahip olmak din dışı bir şey yapmak kadar günahtır.",
            "rate": 1
        },
        {
            "index": 28,
            "sentence": "Zihnimi istenmeyen düşüncelerden uzak tutabilmeliyim.",
            "rate": 1
        },
        {
            "index": 29,
            "sentence": "Kendime veya başkalarına kazara zarar vermeye diğer insanlardan daha yatkınım.",
            "rate": 1
        },
        {
            "index": 30,
            "sentence": "Kötü düşüncelere sahip olmak benim acayip veya anormal biri olduğum anlamına gelir.",
            "rate": 1
        },
        {
            "index": 31,
            "sentence": "Benim için önemli olan şeylerde en iyi olmak zorundayım.",
            "rate": 1
        },
        {
            "index": 32,
            "sentence": "İstenilmeyen bir cinsel düşünce veya hayale sahip olmak onu gerçekten yapmak istediğim anlamına gelir.",
            "rate": 1
        },
        {
            "index": 33,
            "sentence": "Muhtemel bir felaketin yaşanmasında yaptıklarımın az bir etkisi bile olsa ortaya çıkacak sonuçtan ben sorumlu olurum.",
            "rate": 1
        },
        {
            "index": 34,
            "sentence": "Dikkatli olduğum zamanlarda bile genellikle kötü şeylerin olacağı düşüncesine kapılırım.",
            "rate": 1
        },
        {
            "index": 35,
            "sentence": "İstem dışı gelen düşüncelere sahip olmak kontrolden çıktığım anlamına gelir.",
            "rate": 1
        },
        {
            "index": 36,
            "sentence": "Çok dikkatli olmazsam zarara sebep olacak olaylar meydana gelecektir.",
            "rate": 1
        },
        {
            "index": 37,
            "sentence": "Bir şeyler tam olarak doğru bir şekilde yapılana kadar üzerinde çalışmam gerekir.",
            "rate": 1
        },
        {
            "index": 38,
            "sentence": "Saldırgan düşüncelere sahip olmak kontrolü kaybedeceğim ve saldırganlaşacağım anlamına gelir.",
            "rate": 1
        },
        {
            "index": 39,
            "sentence": "Bana göre bir felakete engel olamamak ona neden olmak kadar kötüdür.",
            "rate": 1
        },
        {
            "index": 40,
            "sentence": "Bir işi mükemmel şekilde yapmazsam insanlar bana saygı göstermezler.",
            "rate": 1
        },
        {
            "index": 41,
            "sentence": "Hayatımdaki sıradan deneyimler bile risk doludur.",
            "rate": 1
        },
        {
            "index": 42,
            "sentence": "Kötü bir düşünceye sahip olmak ahlaki olarak kötü bir iş yapmaktan farklı değildir.",
            "rate": 1
        },
        {
            "index": 43,
            "sentence": "Ne yaparsam yapayım yeterince iyi olmayacak.",
            "rate": 1
        },
        {
            "index": 44,
            "sentence": "Düşüncelerimi kontrol etmezsem cezalandırılacağım.",
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
                    <Radio id={`radio_${index}_7`} value={7}>7</Radio>
                </Radio.Group>
            }
        }
    ];

    const handleDownload = () => {
        setloading(true)
        html2canvas(document.getElementById('table_3'), { windowWidth: 1920 }).then(function (canvas) {
            canvas.toBlob((blob) => {
                saveAs(blob, "Obsesif İnanışlar Ölçeği.png");
                setloading(false)
            });
        }).finally(() => setloading(false));
    }

    return <>
        <Title level={2} style={{ textAlign: 'center' }}>Obsesif İnanışlar Ölçeği</Title>
        <Title level={5}>Her bir ifadeyi dikkatlice okuyunuz ve ifadeye katılıp katılmadığınızı belirtiniz. Her bir ifade için sizin düşüncenizi en iyi tanımlayan rakamı işaretleyiniz. Soruların doğru ve yanlış cevabı yoktur. verilen ifadenin sizin genel bakış açınızı temsil edip etmediğine karar verirken çoğu zaman nasıl düşündüğünüzü gözünüzün önüne getiriniz. Cevaplarken aşağıdaki ölçeği kullanınız:</Title>
        <Title level={5}>Soruları puanlarken ölçekteki orta noktayı (4) işaretlemekten kaçınınız. Daha çok kendi inanç ve tutumlarınıza göre genellikle ifadelere katılıp katılmadığınızı belirtiniz. </Title>
        <Title level={5}>1 = Kesinlikle Katılmıyorum</Title>
        <Title level={5}>2 = Orta Düzeyde Katılmıyorum</Title>
        <Title level={5}>3 = Çok Az Katılmıyorum</Title>
        <Title level={5}>4 = Ne Katılıyorum Ne de Katılmıyorum</Title>
        <Title level={5}>5 = Çok Az Katılıyorum</Title>
        <Title level={5}>6 = Oldukça Katılıyorum</Title>
        <Title level={5}>7 = Tamamen Katılıyorum</Title>
        <Table rowKey={({ index }) => index} id="table_3" dataSource={dataSource} columns={columns} pagination={false} />
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

export default Obsesif;