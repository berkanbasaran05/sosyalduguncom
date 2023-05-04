import React from 'react';
import ContactForm from '../forms/contact-form';

const ContactArea = () => {
  return (
    <>
      <div className="tp-contact-area pt-135 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 ">
              <div className="tp-contct-wrapper contact-space-40">
                <div className="tp-contact-thumb mb-60">
                  <img src="/assets/img/contact/get-touch.png" alt="" />
                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">E-Posta Adresi</h4>
                  <span><a href="mailto:(mail@sosyaldugun.com)">(mail@sosyaldugun.com)</a></span>
                  <span><a href="mailto:(info@sosyaldugun.com)">(info@sosyaldugun.com)</a></span>
                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">Telefon Numarası</h4>
                  <span><a href="tel:(+90 216 759 1 759)">(+90 216 759 1 759)</a></span>
                </div>
                <div className="tp-contact-info">
                  <h4 className="contact-title">Adres</h4>
                  <span><a href="https://www.google.com/maps" target="blank">AYDINLI MH. DİDEM SK. NO:1 D:13 (TOPCU PLAZA) TUZLA / İSTANBUL</a></span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tpcontact">
                <h4 className="tp-contact-big-title">İletişime Geçin...</h4>
                <div className="tpcontact__form tpcontact__form-3">
                  {/* ContactForm start */}
                  <ContactForm />
                  {/* ContactForm end */}
                </div>
                <p className="ajax-response"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;