import React from 'react';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import AboutMain from '../components/about';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Hakkımızda'} />
      <AboutMain />
    </Wrapper>
  );
};

export default index;