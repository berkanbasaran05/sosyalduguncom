import Link from 'next/link';
import React from 'react';

function FeatureItem({ title, subtitle, color }) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6">
      <div className='acfeature mb-50'>
        <div className={`ac-circle ${color ? `ac-cirle-color-${color}` : ''}`}></div>
        <div className="acfeature__item">
          <h3 className="ac-feature-sm-title">
            <Link href="/about-me">
              <a>{title}</a>
            </Link>
          </h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}


const contents = {
  title: 'SosyalDüğün - Unutulmaz Düğün Deneyimleri İçin Teknoloji Harikası',
  sm_desc_1: "SosyalDüğün, düğün organizasyonlarında teknolojiyi kullanarak unutulmaz deneyimler sunan bir projedir. Ekibimiz, özel olarak tasarlanmış kameralı canlı yayın ve otomasyon sistemleri ile düğünlerinizi daha da özel hale getirmek için çalışmaktadır. Müşterilerimiz, düğünlerini paylaşmanın yeni bir yolunu keşfetmiş, uzaktaki sevdiklerini etkinliklerine dahil etmiş ve anılarını özelleştirmişlerdir.",
  sm_desc_2: "SosyalDüğün'ün teknolojiyle buluşan yenilikçi yaklaşımı, düğünlerinizi sınırları zorlayan bir deneyime dönüştürmeyi hedeflemektedir. Projemiz, müşteri memnuniyetini en üst düzeyde tutmayı ve her detayı mükemmelleştirmeyi amaçlamaktadır. SosyalDüğün ile unutulmaz bir düğün deneyimi yaşamaya hazır mısınız?"
  }
const { title, sm_desc_1, sm_desc_2 } = contents;

const FeatureArea = () => {
  return (
    <>
      <div className="ac-feature-area">
        <div className="container">
          <div className="row ac-feature-space">
            <div className="col-xl-6 col-lg-6">
              <div className="ac-feature-left">
                <h3 className="ac-feature-title">{title}</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="ac-feature-right">
                <p className="pb-25">{sm_desc_1}</p>
                <p>{sm_desc_2}</p>
              </div>
            </div>
          </div>
        
<div className="ac-feature-border-top">
            <div className="row">
              <FeatureItem title={'Kameralı Canlı Yayın'} color={'1'}
                subtitle={'SosyalDüğün ile düğünlerinizi canlı olarak izleyin ve sevdiklerinizle paylaşın.'} />
              <FeatureItem title={'Otomasyon Sistemi'} color={'2'}
                subtitle={'SosyalDüğün, düğün organizasyonlarınızı otomatikleştirerek daha sorunsuz ve kusursuz bir deneyim sunar.'} />
              <FeatureItem title={'Özelleştirilmiş Anılar'} color={'3'}
                subtitle={'SosyalDüğün ile düğünlerinizi özelleştirin ve unutulmaz anılar yaratın.'} />
              <FeatureItem title={'Uzaktan Katılım'} color={'4'}
                subtitle={'SosyalDüğün, uzaktaki sevdiklerinizi düğününüze katılma imkanı sunar.'} />
                        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;