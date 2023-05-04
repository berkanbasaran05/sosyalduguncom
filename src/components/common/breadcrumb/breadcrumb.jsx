import Link from 'next/link';
import React from 'react';

const Breadcrumb = ({ title, back_home= false }) => {
  return (
    <section className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative"
      style={{ backgroundImage: 'url(/assets/img/breadcrum/banner-wd.png)' }}>
      
      <div className="container">
        <div className="col">
        <div className='breadtitle-area'>
             <h3 className="breadcrumb__title">{title}</h3>
              {!back_home &&<Link href="/contact">
                <a className="tp-btn-white-border">Birlikte Çalışalım <i className="far fa-arrow-right"></i></a>
              </Link>}
              {back_home &&<Link href="/">
                <a className="tp-btn-white-border">Geri Dön <i className="far fa-arrow-right"></i></a>
              </Link>}
             </div>
          <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;