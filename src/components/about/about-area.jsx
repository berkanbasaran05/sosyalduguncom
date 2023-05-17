import React from 'react';
import useModal from '../../hooks/use-modal';
import VideoModal from '../common/modals/modal-video';

const contents = {
  title:'İşleri Kolaylaştıran ve Değer Katan Otomasyon.',
  video_title:'Demo Videoyu Görmek İçin Tıklayınız.',
  video_id:'',
 right_text_1:"Düğün, davet, balo salonu işletmeleri için ileri  teknolojiyle sınırları zorlayan otomasyon işletmesi olarak, salonlarına özel olarak tasarladığımız kameralı canlı yayın izleme ve etkinlik rezervasyon otomasyon sistemi yazılımıyla işletmenize farklı bir deneyim sunuyuz.  Gelin ve damadın özel anlarını paylaşmanın, uzaktaki sevdiklerini bile etkinliğe dahil etmenin heyecan verici dünyasına davet ediyoruz. Teknolojiyi en etkili şekilde kullanarak, düğün, davet, sünnet gibi özel etkinliklerinizi bir adım öteye taşıyoruz. Özel Yazılımımız sayesinde düğün salonunuza konumlandırdığımız kameraların canlı yayınını etkinlik tarihlerinde gerçek zamanlı olarak etkinlik sonrası 7 güne kadar banttan izleterek müşterilerinizin uzakta olan aileleri, sevdikleri  ve arkadaşlarıyla bu özel anları paylaşmalarını sağlıyoruz. Müşteri memnuniyetini en üst düzeyde tutmak ve düğünlerinizi unutulmaz kılmak için sürekli olarak kendimizi geliştiriyoruz. Teknolojik trendleri takip ediyor, kullanıcı geri bildirimlerine önem veriyor ve her geçen gün yazılımımızı daha da güçlendiriyoruz. Detaylı bilgi ve demo talepleriniz için bizimle iletişime geçiniz.",
  client_icon:'/assets/img/about/testi-7.png',
  client_name:'Berkan Başaran',
  client_title:'Executive Chairman (orix)',
  desc:"Wow. What a great experience with this copywriter. collax is a very talented digital agnecy. yesterday.",
  about_img:'/assets/img/breadcrum/ab-1.2.jpg',
}
const {about_img,client_icon,client_name,client_title,desc,right_text_1,right_text_2,title,video_id,video_title} = contents;

const   AboutArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <div className="ac-about-content-area pt-130">
        <div className="container">
          <div className="ac-border-bottom ac-bottom-space">
            <div className="row">
              <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
                <div className="ac-about-left">
                  <h3 className="ac-ab-title"><a href="#">{title}</a></h3>
                  {/**
                   * <div className="ac-play-button">
                    <button onClick={() => setIsVideoOpen(true)} className="popup-video">
                      <i className="far fa-play"></i></button>
                    <span>{video_title}</span>
                  </div>
                   */}
                </div>
              </div>
              <div className="col-xl- col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
                <div className="ac-about-right">
                  <p className="pb-25">{right_text_1}</p>
                  <p>{right_text_2}</p>
                </div>
              </div>
            </div>
          </div>
         {/**
          *  <div className="row ac-testimonial-space">
            <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
              <div className="ac-testimonial-info">
                <div className="actestimonial">
                  <div className="actestimonial__icon">
                    <img src={client_icon} alt="" />
                  </div>
                  <div className="actestimonial__position">
                    <h4 className="ac-client-name"><a href="#">{client_name}</a></h4>
                    <span>{client_title}</span>
                  </div>
                  <div className="actestimonial__paragraph">
                    <p> <span><i className="fas fa-quote-right"></i></span>{desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
              <div className="ac-testimonial-right">
                <img src={about_img} alt="" />
              </div>
            </div>
          </div>
          * 
          * 
          */}
        </div>
      </div>

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={video_id} />
      {/* video modal end */}
    </>
  );
};

export default AboutArea;