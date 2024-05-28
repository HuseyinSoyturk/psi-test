import React, { useState } from "react";
import { Button, Flex, Radio, Table, Typography } from 'antd';
import { Document, Packer, Paragraph, TextRun } from "docx";
import html2canvas from "html2canvas";
const { Title } = Typography;
import { saveAs } from 'file-saver';


const Young = ({ setloading }) => {

  const source = [
    { "index": 1, "sentence": "Beni sevdi ve bana özel birisi gibi davrandı.", "anneRate": 1, "babaRate": 1 },
    { "index": 2, "sentence": "Bana vaktini ayırdı ve özen gösterdi.", "anneRate": 1, "babaRate": 1 },
    { "index": 3, "sentence": "Bana yol gösterdi ve olumlu yönlendirdi.", "anneRate": 1, "babaRate": 1 },
    { "index": 4, "sentence": "Beni dinledi, anladı ve duygularımızı karşılıklı paylaştık.", "anneRate": 1, "babaRate": 1 },
    { "index": 5, "sentence": "Bana karşı sıcaktı ve fiziksel olarak şefkatliydi.", "anneRate": 1, "babaRate": 1 },
    { "index": 6, "sentence": "Ben çocukken öldü veya evi terk etti.", "anneRate": 1, "babaRate": 1 },
    { "index": 7, "sentence": "Dengesizdi, ne yapacağı belli olmazdı veya alkolikti.", "anneRate": 1, "babaRate": 1 },
    { "index": 8, "sentence": "Kardeş(ler)imi bana tercih etti.", "anneRate": 1, "babaRate": 1 },
    { "index": 9, "sentence": "Uzun süreler boyunca beni terk etti veya yalnız bıraktı.", "anneRate": 1, "babaRate": 1 },
    { "index": 10, "sentence": "Bana yalan söyledi, beni kandırdı veya bana ihanet etti.", "anneRate": 1, "babaRate": 1 },
    { "index": 11, "sentence": "Beni dövdü, duygusal veya cinsel olarak taciz etti.", "anneRate": 1, "babaRate": 1 },
    { "index": 12, "sentence": "Beni kendi amaçları için kullandı.", "anneRate": 1, "babaRate": 1 },
    { "index": 13, "sentence": "İnsanların canını yakmaktan hoşlanırdı.", "anneRate": 1, "babaRate": 1 },
    { "index": 14, "sentence": "Bir yerimi inciteceğim diye çok endişelenirdi.", "anneRate": 1, "babaRate": 1 },
    { "index": 15, "sentence": "Hasta olacağım diye çok endişelenirdi.", "anneRate": 1, "babaRate": 1 },
    { "index": 16, "sentence": "Evhamlı veya fobik/korkak bir insandı.", "anneRate": 1, "babaRate": 1 },
    { "index": 17, "sentence": "Beni aşırı korurdu.", "anneRate": 1, "babaRate": 1 },
    { "index": 18, "sentence": "Kendi kararlarıma veya yargılarıma güvenememe neden oldu.", "anneRate": 1, "babaRate": 1 },
    { "index": 19, "sentence": "İşleri kendi başıma yapmama fırsat vermeden çoğu işimi o yaptı.", "anneRate": 1, "babaRate": 1 },
    { "index": 20, "sentence": "Bana hep daha çocukmuşum gibi davrandı.", "anneRate": 1, "babaRate": 1 },
    { "index": 21, "sentence": "Beni çok eleştirirdi.", "anneRate": 1, "babaRate": 1 },
    { "index": 22, "sentence": "Bana kendimi sevilmeye layık olmayan veya dışlanmış bir gibi hissettirdi.", "anneRate": 1, "babaRate": 1 },
    { "index": 23, "sentence": "Bana hep bende yanlış bir şey varmış gibi davrandı.", "anneRate": 1, "babaRate": 1 },
    { "index": 24, "sentence": "Önemli konularda kendimden utanmama neden oldu.", "anneRate": 1, "babaRate": 1 },
    { "index": 25, "sentence": "Okulda başarılı olmam için gereken disiplini bana kazandırmadı.", "anneRate": 1, "babaRate": 1 },
    { "index": 26, "sentence": "Bana salakmışım veya beceriksizmişim gibi davrandı.", "anneRate": 1, "babaRate": 1 },
    { "index": 27, "sentence": "Başarılı olmamı gerçekten istemedi.", "anneRate": 1, "babaRate": 1 },
    { "index": 28, "sentence": "Hayatta başarısız olacağıma inandı.", "anneRate": 1, "babaRate": 1 },
    { "index": 29, "sentence": "Benim fikrim veya isteklerim önemsizmiş gibi davrandı.", "anneRate": 1, "babaRate": 1 },
    { "index": 30, "sentence": "Benim ihtiyaçlarımı gözetmeden kendisi ne isterse onu yaptı.", "anneRate": 1, "babaRate": 1 },
    { "index": 31, "sentence": "Hayatımı o kadar çok kontrol altında tuttu ki çok az seçme özgürlüğüm oldu.", "anneRate": 1, "babaRate": 1 },
    { "index": 32, "sentence": "Her şey onun kurallarına uymalıydı.", "anneRate": 1, "babaRate": 1 },
    { "index": 33, "sentence": "Aile için kendi isteklerini feda etti.", "anneRate": 1, "babaRate": 1 },
    { "index": 34, "sentence": "Günlük sorumluluklarının pek çoğunu yerine getiremiyordu ve ben her zaman kendi payıma düşenden fazlasını yapmak zorunda kaldım.", "anneRate": 1, "babaRate": 1 },
    { "index": 35, "sentence": "Hep mutsuzdu; destek ve anlayış için hep bana dayandı.", "anneRate": 1, "babaRate": 1 },
    { "index": 36, "sentence": "Bana güçlü olduğumu ve diğer insanlara yardım etmem gerektiğini hissettirdi.", "anneRate": 1, "babaRate": 1 },
    { "index": 37, "sentence": "Kendisinden beklentisi hep çok yüksekti ve bunlar için kendini çok zorlardı.", "anneRate": 1, "babaRate": 1 },
    { "index": 38, "sentence": "Benden her zaman en iyisini yapmamı bekledi.", "anneRate": 1, "babaRate": 1 },
    { "index": 39, "sentence": "Pek çok alanda mükemmeliyetçiydi; ona göre her şey olması gerektiği gibi olmalıydı.", "anneRate": 1, "babaRate": 1 },
    { "index": 40, "sentence": "Yaptığım hiçbir şeyin yeterli olmadığını hissetmeme sebep oldu.", "anneRate": 1, "babaRate": 1 },
    { "index": 41, "sentence": "Neyin doğru neyin yanlış olduğu hakkında kesin ve katı kuralları vardı.", "anneRate": 1, "babaRate": 1 },
    { "index": 42, "sentence": "Eğer işler düzgün ve yeterince hızlı yapılmazsa sabırsızlanırdı.", "anneRate": 1, "babaRate": 1 },
    { "index": 43, "sentence": "İşlerin tam ve iyi olarak yapılmasına, eğlenme veya dinlenmekten daha fazla önem verdi.", "anneRate": 1, "babaRate": 1 },
    { "index": 44, "sentence": "Beni pek çok konuda şımarttı veya aşırı hoşgörülü davrandı.", "anneRate": 1, "babaRate": 1 },
    { "index": 45, "sentence": "Diğer insanlardan daha önemli ve daha iyi olduğumu hissettirdi.", "anneRate": 1, "babaRate": 1 },
    { "index": 46, "sentence": "Çok talepkardı; her şeyin onun istediği gibi olmasını isterdi.", "anneRate": 1, "babaRate": 1 },
    { "index": 47, "sentence": "Diğer insanlara karşı sorumluluklarımın olduğunu bana öğretmedi.", "anneRate": 1, "babaRate": 1 },
    { "index": 48, "sentence": "Bana çok az disiplin veya terbiye verdi.", "anneRate": 1, "babaRate": 1 },
    { "index": 49, "sentence": "Bana çok az kural koydu veya sorumluluk verdi.", "anneRate": 1, "babaRate": 1 },
    { "index": 50, "sentence": "Aşırı sinirlenmeme veya kontrolümü kaybetmeme izin verirdi.", "anneRate": 1, "babaRate": 1 },
    { "index": 51, "sentence": "Disiplinsiz bir insandı.", "anneRate": 1, "babaRate": 1 },
    { "index": 52, "sentence": "Birbirimizi çok iyi anlayacak kadar yakındık.", "anneRate": 1, "babaRate": 1 },
    { "index": 53, "sentence": "Ondan tam olarak ayrı bir birey olduğumu hissedemedim veya bireyselliğimi yeterince yaşayamadım.", "anneRate": 1, "babaRate": 1 },
    { "index": 54, "sentence": "Onun çok güçlü bir insan olmasından dolayı büyürken kendi yönümü belirleyemiyordum.", "anneRate": 1, "babaRate": 1 },
    { "index": 55, "sentence": "İçimizden birinin uzağa gitmesi durumunda, birbirimizi üzebileceğimizi hissederdim.", "anneRate": 1, "babaRate": 1 },
    { "index": 56, "sentence": "Ailemizin ekonomik sorunları ile ilgili çok endişeli idi.", "anneRate": 1, "babaRate": 1 },
    { "index": 57, "sentence": "Küçük bir hata bile yapsam kötü sonuçların ortaya çıkacağını hissettirirdi.", "anneRate": 1, "babaRate": 1 },
    { "index": 58, "sentence": "Kötümser bir bakışı açısı vardı, hep en kötüsünü beklerdi.", "anneRate": 1, "babaRate": 1 },
    { "index": 59, "sentence": "Hayatın kötü yanları veya kötü giden şeyler üzerine odaklanırdı.", "anneRate": 1, "babaRate": 1 },
    { "index": 60, "sentence": "Her şey onun kontrolü altında olmalıydı.", "anneRate": 1, "babaRate": 1 },
    { "index": 61, "sentence": "Duygularını ifade etmekten rahatsız olurdu.", "anneRate": 1, "babaRate": 1 },
    { "index": 62, "sentence": "Hep düzenli ve tertipliydi; değişiklik yerine bilineni tercih ederdi.", "anneRate": 1, "babaRate": 1 },
    { "index": 63, "sentence": "Kızgınlığını çok nadir belli ederdi.", "anneRate": 1, "babaRate": 1 },
    { "index": 64, "sentence": "Kapalı birisiydi; duygularını çok nadir açardı.", "anneRate": 1, "babaRate": 1 },
    { "index": 65, "sentence": "Yanlış bir şey yaptığımda kızardı veya sert bir şekilde eleştirdiği olurdu.", "anneRate": 1, "babaRate": 1 },
    { "index": 66, "sentence": "Yanlış bir şey yaptığımda beni cezalandırdığı olurdu.", "anneRate": 1, "babaRate": 1 },
    { "index": 67, "sentence": "Yanlış yaptığımda bana aptal veya salak gibi kelimelerle hitap ettiği olurdu.", "anneRate": 1, "babaRate": 1 },
    { "index": 68, "sentence": "İşler kötü gittiğinde başkalarını suçlardı.", "anneRate": 1, "babaRate": 1 },
    { "index": 69, "sentence": "Sosyal statü ve görünüme önem verirdi.", "anneRate": 1, "babaRate": 1 },
    { "index": 70, "sentence": "Başarı ve rekabete çok önem verirdi.", "anneRate": 1, "babaRate": 1 },
    { "index": 71, "sentence": "Başkalarının gözünde benim davranışlarımın onu ne duruma düşüreceği ile çok ilgiliydi.", "anneRate": 1, "babaRate": 1 },
    { "index": 72, "sentence": "Başarılı olduğum zaman beni daha çok sever veya bana daha çok özen gösterirdi.", "anneRate": 1, "babaRate": 1 }
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
      title: 'Anne',
      dataIndex: 'anneRate',
      key: 'anneRate',
      render: (checked, { anneRate, index }) => {
        const handleChange = (value) => {
          const newDataSource = [...dataSource]
          const sentenceData = newDataSource.find(obj => obj.index === index)
          if (sentenceData) {
            sentenceData.anneRate = value;
            setDataSource(newDataSource);
          }
        }

        return <Radio.Group key={index} onChange={(e) => handleChange(e.target.value)} value={anneRate}>
          <Radio id={`radio_${index}_1`} value={1}>1</Radio>
          <Radio id={`radio_${index}_2`} value={2}>2</Radio>
          <Radio id={`radio_${index}_3`} value={3}>3</Radio>
          <Radio id={`radio_${index}_4`} value={4}>4</Radio>
          <Radio id={`radio_${index}_5`} value={5}>5</Radio>
        </Radio.Group>
      }
    },
    {
      title: 'Baba',
      dataIndex: 'babaRate',
      key: 'babaRate',
      render: (checked, { babaRate, index }) => {
        const handleChange = (value) => {
          const newDataSource = [...dataSource]
          const sentenceData = newDataSource.find(obj => obj.index === index)
          if (sentenceData) {
            sentenceData.babaRate = value;
            setDataSource(newDataSource);
          }
        }

        return <Radio.Group key={index} onChange={(e) => handleChange(e.target.value)} value={babaRate}>
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
    html2canvas(document.getElementById('table_5'), { windowWidth: 1920 }).then(function (canvas) {
      canvas.toBlob((blob) => {
        saveAs(blob, "Young-E.png");
        setloading(false)
      });
    }).finally(() => setloading(false));
  }

  return <>
    <Title level={2} style={{ textAlign: 'center' }}>Young -E</Title>
    <Title level={5}>Aşağıda anne ve babanızı tarif etmekte kullanabileceğiniz tanımlamalar verilmiştir. Lütfen her tanımlamayı dikkatle okuyun ve ebeveynlerinize ne kadar uyduğuna karar verin. 1 ile 6 arasında, çocukluğunuz sırasında annenizi ve babanızı tanımlayan en yüksek dereceyi seçin. Eğer sizi anne veya babanız yerine başka insanlar büyüttü ise onları da aynı şekilde derecelendirin. Eğer anne veya babanızdan biri hiç olmadı ise o sütunu boş bırakın.</Title>
    <Title level={5}>1 = Tamamı ile yanlış</Title>
    <Title level={5}>2 = Çoğunlukla yanlış </Title>
    <Title level={5}>3 = Uyan tarafı daha fazla</Title>
    <Title level={5}>4 = Orta derecede doğru</Title>
    <Title level={5}>5 = Çoğunlukla doğru </Title>
    <Title level={5}>6 = Ona tamamı ile uyuyor</Title>
    <Table rowKey={({ index }) => index} id="table_5" dataSource={dataSource} columns={columns} pagination={false} />
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

export default Young;