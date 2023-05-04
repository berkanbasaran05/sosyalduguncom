import React from 'react'
import { Wrapper } from '../layout'
import SEO from '../components/seo'
import Nasilcalisirmain from '../components/nasilcalisir'

export default function nasilcalisir() {
  return (
    <Wrapper>
        <SEO pageTitle={'Nasıl Çalışır'}/>
        <Nasilcalisirmain/>
    </Wrapper>
  )
}