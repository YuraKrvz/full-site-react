import React from 'react';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP, } from './ServicesElements';
import Icon1 from '../../images/image4.svg';
import Icon2 from '../../images/image5.svg';
import Icon3 from '../../images/image6.svg';


const Services = ()=> {
 
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
         <ServicesCard>
            <ServicesIcon src={Icon1}></ServicesIcon>
            <ServicesH2>Lorem ipsum </ServicesH2>
            <ServicesP>Lorem ipsum Lorem ipsum </ServicesP>
         </ServicesCard>
         <ServicesCard>
            <ServicesIcon src={Icon2}></ServicesIcon>
            <ServicesH2>Lorem ipsum Lorem ipsum </ServicesH2>
            <ServicesP>Lorem ipsum Lorem ipsum </ServicesP>
         </ServicesCard>
         <ServicesCard>
            <ServicesIcon src={Icon3}></ServicesIcon>
            <ServicesH2>Lorem ipsum </ServicesH2>
            <ServicesP>Lorem ipsum Lorem ipsum </ServicesP>
         </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;