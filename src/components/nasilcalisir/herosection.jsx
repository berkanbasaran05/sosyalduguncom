import React from 'react';

const accordion_items = [
    { id: 'one', show: true, title: 'Düğünlerim için nasıl bir canlı yayın sistemi sağlıyorsunuz?', desc: "SosyalDüğün olarak, düğünlerinizin her anını canlı olarak paylaşabilmeniz için özel bir canlı yayın sistemi sunuyoruz. Sevdiklerinizin düğününüzü uzaktan izleyebilmesi ve size katılım sağlayabilmesi için yüksek kaliteli kameralar ve yayın ekipmanları kullanıyoruz. Bu sayede, düğününüzü sevdiklerinizle paylaşmanın keyfini canlı olarak yaşayabilirsiniz." },
    { id: 'two', title: 'Otomasyon sisteminiz nasıl çalışıyor ve ne gibi faydalar sağlıyor?', desc: "SosyalDüğün'ün otomasyon sistemi, düğün organizasyonlarınızı kolaylaştırmanıza yardımcı olur. Misafir kayıtlarından oturma düzenine, müzik çalma listelerinden fotoğraf ve video paylaşımlarına kadar birçok süreci otomatikleştiririz. Böylece, daha az stresli ve daha keyifli bir düğün deneyimi yaşayabilir, misafirlerinizin katılımını ve etkileşimini artırabilirsiniz." },
    { id: 'three', title: 'Verilerim ve kişisel bilgilerim nasıl korunuyor?', desc: "SosyalDüğün olarak, verilerinizin güvenliği ve gizliliği konusunda büyük önem veriyoruz. Kişisel bilgilerinizin gizliliğini sağlamak için güvenlik protokollerini uyguluyor ve verilerinizi güçlü şifreleme yöntemleriyle koruyoruz. Verileriniz sadece düğününüzle ilgili gereksinimleri karşılamak için kullanılır ve üçüncü taraflarla paylaşılmaz. Gizlilik politikamıza sıkı bir şekilde bağlıyız ve verilerinizi güvende tutmak için gerekli adımları atarız." },
    { id: 'four', title: 'Müşteri desteği ve teknik destek sağlıyor musunuz?', desc: "SosyalDüğün olarak, müşteri memnuniyetine büyük önem veriyoruz ve sizlere en iyi hizmeti sunmak için buradayız. Deneyimli müşteri destek ekibimiz, herhangi bir sorunuz veya sorununuz olduğunda size yardımcı olmak için hazır bulunuyor. Teknik destek sağlıyor, sorularınızı yanıtlıyor ve gerektiğinde size rehberlik ediyoruz. Düğün süreciniz boyunca sizinle iletişim halinde oluyor ve sorunsuz bir deneyim yaşamanızı sağlamak için elimizden geleni yapıyoruz." },
    ];
const HeroSection = () => {
  return (
    <>
      <div className="sd-accordio-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-custom-accordio faq-accordio-border">
                <div className="accordion" id="accordionExample">

                  {accordion_items.map((item, i) => {
                    const { id, show, title, desc } = item;
                    return <div key={id} className='accordion-items'>
                      <h2 className="accordion-header" id={`heading-${id}`}>
                        <button className={`accordion-buttons ${show ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${id}`}
                          aria-expanded={show ? 'true' : 'false'} aria-controls={`collapse-${id}`}>
                          {title}
                        </button>
                      </h2>
                      <div id={`collapse-${id}`} className={`accordion-collapse collapse ${show ? 'show' : ''}`} aria-labelledby={`heading-${id}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          {desc}
                        </div>
                      </div>
                    </div>
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;