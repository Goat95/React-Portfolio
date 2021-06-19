import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ContactInfoItem from './ContactInfoItem';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSectionWrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSectionWrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    width: 100%;
    max-width: 500px;
  }
  @media (max-width: 768px) {
    .contactSectionWrapper {
      flex-direction: column;
    }
    .contactSectionWrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Contact" subheading="Get in touch" />
        <div className="contactSectionWrapper">
          <div className="left">
            <ContactInfoItem 
              icon={ <MdLocalPhone /> }
              text="010-2887-8816"
            />
            <ContactInfoItem 
              icon={ <MdEmail /> }
              text="goat95@naver.com"
            />
            <ContactInfoItem 
              text="서울시 은평구 연서로21길"
            />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  )
}
