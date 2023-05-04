import Link from 'next/link';
import React from 'react';
import { FaVideo, FaCog, FaCamera, FaUsers } from 'react-icons/fa';



const ServicesArea = () => {
  return (
    <>
      <div className="ac-chose-area mb-130">
        <div className="container ac-chose-bg">
          <div className="row">
            <ChoseItem duration='.3s' delay='.5s' icon={<FaVideo />} title={<>Kameralı Canlı Yayın <br /> Hizmeti</>}
              text={'Düğünlerinizi canlı olarak izleme ve sevdiklerinizle paylaşma imkanı'} />
            <ChoseItem duration='.5s' delay='.7s' item_num={'tpchosebox-three'} color="fea-color-5" icon={<FaCog />} title={<>Otomasyon Sistemi <br /> Uygulamaları</>} text={'Düğün organizasyonlarınızı kolaylaştırın ve kusursuz bir deneyim sunun'} />
            <ChoseItem duration='.7s' delay='.9s' item_num={'tpchosebox-two'} color="fea-color-4" icon={<FaCamera />} title={<>Özelleştirilmiş <br /> Anılar</>} text={'Düğünlerinizi kişiselleştirin ve unutulmaz anılar yaratın'} />
            <ChoseItem duration='.9s' delay='1s' icon={<FaUsers />} title={<>Uzaktan <br /> Katılım</>}
              text={'Uzaktaki sevdiklerinizi düğününüze katılma imkanı sunun'} />
          </div>
        </div>
      </div>
    </>
  );
};














export default ServicesArea;

const ChoseItem = ({ duration, delay, item_num, icon, title, text, color }) => {
  return (
    <div className="col-xl-3 col-lg-6 col-md-6 col-12 wow tpfadeUp"
      data-wow-duration={duration} data-wow-delay={delay}>
      <div className="tp-chose-item mb-30">
        <div className={`tpchosebox ${item_num && item_num}`}>
          <div className={`tpchosebox__icon ${color && color} mb-30`}>
            <a href="#"> {icon}</a>
          </div>
          <div className="tpchosebox__content">
            <h4>
              
                <a>{title}</a>
              
            </h4>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}