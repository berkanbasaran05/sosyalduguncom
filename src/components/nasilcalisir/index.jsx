import React, { useEffect } from 'react'
import { Footer, FooterTwo, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import HeroSection from './herosection';

const Nasilcalisir = () => {


    useEffect(() => {
        setTimeout(() => {
          animationCreate();
        }, 500);
      }, [])
 
    
      return (
    <Wrapper>
        <HeaderSix/>
        <Breadcrumb title={'Nasıl Çalışır'}/>
        <HeroSection/>
        <FooterTwo/>

    </Wrapper>
  )
}

export default Nasilcalisir