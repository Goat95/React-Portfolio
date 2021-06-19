import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import SectionTitle from './SectionTitle';
import PText from './PText';
import styled from 'styled-components';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import animations from '../assets/data/animations';
import Iframe from 'react-iframe';

const AnimationSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .animationWrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }
  .animationInfo {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    margin-top: 5rem;
  }
  .animationDesc {
    margin-bottom: 2rem;
    .para {
      text-align: center;
    }
  }
  .animationName {
    margin-bottom: 2rem;
    font-family: 'Montserrat Bold';
    font-size: 2.2rem;
  }
  .iframe {
    width: 100%;
    height: 300px;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  .fade-enter {
    opacity: 0;
    transform: scale(.96);
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in;
    transition-property: opacity, transform;
  }
  .fade-exit {
    opacity: 1;
    transform: scale(1);
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(.96);
    transition: 250ms ease-in;
    transition-property: opacity, transform;
  }
`;

export default function AnimationSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = animations[activeIndex];

  function handlePrev() {
    if (activeIndex <= 0) {
      setActiveIndex(animations.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }
  function handleNext() {
    if (activeIndex >= animations.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }
  return (
    <AnimationSectionStyles>
      <div className="container">
        <SectionTitle heading="Animation" subheading="Various Animation Effect"/>
        <div className="animationWrapper">
          <SwitchTransition>
            <CSSTransition
              key={activeSlide.id}
              timeout={300}
              classNames="fade"
            >
              <div className="animationInfo">
                <h2 className="animationName">{activeSlide.name}</h2>
                <div className="animationDesc">
                  <PText>{activeSlide.desc}</PText>
                </div>
                <Iframe className="iframe" scrolling="no" src={activeSlide.src} frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></Iframe>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div className="prev"
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBack />
          </div>
          <div className="next"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward />
          </div>
        </div>
      </div>
    </AnimationSectionStyles>
  )
}
