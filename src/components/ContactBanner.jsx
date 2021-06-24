import React from 'react';
import PText from './PText';
import Button from './Button';
import styled from 'styled-components';

const ContactBannerStyles = styled.div`
  padding: 10rem 0;
  .contactBannerWrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0;
    text-align: center;
  }
  .contactBannerHeading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 768px) {
    .contactBannerHeading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBannerWrapper">
          <PText>Thank You!</PText>
          <h3 className="contactBannerHeading">Contact me anytime</h3>
          <Button btnText="Contact Now" btnLink="/contact"/>
        </div>
      </div>
    </ContactBannerStyles>
  )
}
