import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) => 
      props.outline ? 'transparent' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: ${(props) => (props.outline ? 'var(--gray-1)' : 'black')};
  }
  @media (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({ 
  btnLink = 'https://codepen.io/goat95/pen/wvJNKPp', 
  btnText = 'Test', 
  outline = false 
}) {
  return (
    <Fade bottom cascade>
      <ButtonStyle outline={outline} className="buttonWrapper">
        <a href={btnLink} rel="noreferrer" className="button">{btnText}</a>
      </ButtonStyle>
    </Fade>
  )
}
