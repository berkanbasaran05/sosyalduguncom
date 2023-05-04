import React, { useEffect } from 'react';
import { FooterThree, FooterTwo, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ContactArea from './contact-area';


const Contact = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={'İletişim'} />
      <ContactArea/>
      <FooterTwo />
    </Wrapper>
  );
};

export default Contact;