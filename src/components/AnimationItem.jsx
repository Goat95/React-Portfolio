import React from 'react';
import Iframe from 'react-iframe';
import styled from 'styled-components';
import Button from './Button';
import Fade from 'react-reveal/Fade';

const AnimationItemStyles = styled.div`
  display: flex;
  margin-top: 10rem;
  .iframe {
    width: 50%;
    height: 400px;
    border: none;
    outline: none;
  }
  .animationItemInfo {
    width: 40%;
    margin-left: 10rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
  .animationItemTitle {
    font-size: 3rem;
  }
  .animationItemDesc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Reqular';
    margin-top: 2rem;
  }
  @media (max-width: 768px) {
    display: block;
    .iframe {
      width: 100%;
    }
    .animationItemInfo {
      width: 100%;
      margin-top: 2rem;
      margin-left: 0;
    }
  }
  @media (max-width: 465px) {
    .iframe {
      height: 300px;
    } 
  }
`;

export default function AnimationItem({
  src = 'http://goat95.dothome.co.kr/assets/animation/tail.html',
  title = 'Animation Name',
  desc = 'This is animation',
  href = 'https://codepen.io/goat95/pen/wvJNKPp'
}) {
  return (
    <AnimationItemStyles>
      <Iframe className="iframe" scrolling="no" src={src} frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></Iframe>
      <div className="animationItemInfo">
        <Fade right>
          <h3 className="animationItemTitle">{title}</h3>
          <p className="animationItemDesc">{desc}</p>
        </Fade>
        <Button btnText="Code View" btnLink={href} />
      </div>
    </AnimationItemStyles>
  )
}
