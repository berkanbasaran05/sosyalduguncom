import React from 'react';
import useModal from '../../../hooks/use-modal';
import VideoModal from '../../common/modals/modal-video';
import Link from 'next/link';
import { useRouter } from 'next/router';

const creative_contents = {
  shape_1: '/assets/img/hero/shape-2.png',
  creative_shapes: [
    { img: '/assets/img/creative/creative-hand.png' },
    { img_2: '-2', img: '/assets/img/creative/creative-circle-img.png' },
  ],
  title: <>Teknolojiyle Harmanlanan Düğün Deneyimi: Etkinlik Yönetimi ve Canlı Yayın Hizmetiyle Öne Çıkın; <b>Kameralı Canlı Yayın İzleme </b> ve Otomasyon Sistemi</>,
  video_id: 'PO_fBTkoznc',
  video_title: 'Hemen Şimdi Etkinliği İzle',
  creative_box: [
    { id: 1, duration: '.3s', delay: '.6s', icon: 'flaticon-satisfaction', box_title: '100%', 
    box_text: 'Müşteri Memnuniyeti' },
    {
      id: 2, duration: '.5s', delay: '.8s', color: 'tp-creative-blue', icon: 'flaticon-clipboard',
      box_title: '30+', box_text: 'Anlaşılan Salon'
    },
    {
      id: 3, duration: '.7s', delay: '1s', color: 'tp-creative-pink', icon: 'flaticon-setting',
      box_title: '500+', box_text: 'Etkinlik Deneyimi'
    },
  ]
}

const {shape_1,creative_shapes,title,video_id,video_title,creative_box } = creative_contents;

const CreativeArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  const router = useRouter();
  const handleClick = () => {
    router.push('https://portal.sosyaldugun.com/canli')
  };

  return (
    <>
      <div className="p-relative">
        <div className="shape-two z-index-1">
          <img src={shape_1} alt="" />
        </div>
        <div className="tp-creative-area p-relative black-bg pt-140 pb-135 fix">
          <div className="circle-animation testimonial">
            <span className="tp-circle-1"></span>
            <span className="tp-circle-2"></span>
          </div>
          {creative_shapes.map((s, i) => (
            <div key={i} className={`creative-shape-img${s.img_2 ? s.img_2 : ''}`}>
              <img src={s.img} alt="" />
            </div>
          ))}
          <div className="container creative-z-index ">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-creative-box text-center">
                  <div className="tp-creative-content mb-110">
                    <h4 className="tp-creative-title">{title}</h4>
                  </div>
                  <div className="tp-play-button mb-150">
                
                    
                    <button className="popup-video" onClick={() => handleClick()}>
                      <i className="fal fa-play"></i>
                    </button>
                    
                    <span>{video_title}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="creative-box pl-40 pr-40">
              <div className="row gx-5">
                {creative_box.map((b) => (
                  <div key={b.id} className="col-lg-4 col-md-12 col-xs-12 mb-30">
                    <div className={`tp-creative-item ${b?.color} wow tpfadeUp`} data-wow-duration={b.duration} data-wow-delay={b.delay}>
                      <div className="tp-creative-yellow d-flex align-items-center">
                        <div className="tp-creative-icon mr-35">
                          <i className={b.icon}></i>
                        </div>
                        <div className="counter-text">
                          <span>{b.box_title}</span>
                          <p className="m-0">{b.box_text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={video_id} />
      {/* video modal end */}
    </>
  );
};

export default CreativeArea;