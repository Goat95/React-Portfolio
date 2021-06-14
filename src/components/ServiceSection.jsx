import React from 'react';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';
import styled from 'styled-components';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .servicesAllItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media (max-width: 768px) {
    .servicesAllItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What i will do for you" />
        <div className="servicesAllItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Website Development"
            desc="I also develop the websites. I create high performance website with blazing fast speed."
          />
          <ServicesSectionItem 
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
        </div>
      </div>
    </ServicesItemStyles>
  )
}
