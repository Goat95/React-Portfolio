import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PText({ children }) {
  return (
    <Fade bottom cascade>
      <PStyle className="para">
        <p>{children}</p>
      </PStyle>
    </Fade>
  )
}
