import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import SectionTitle from './SectionTitle';
import PText from './PText';
import styled from 'styled-components';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import testimonials from '../assets/data/testimonials';

const TestimonialSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .testimonialWrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }
  .testimonialInfo {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    margin-top: 5rem;
  }
  .testimonialDesc {
    .para {
      text-align: center;
    }
  }
  .testimonialName {
    margin-top: 4rem;
    font-family: 'Montserrat Bold';
    font-size: 2.2rem;
  }
  .testimonialTitle {
    font-size: 1.6rem;
    margin-top: 0.3rem;
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

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = testimonials[activeIndex];

  function handlePrev() {
    if (activeIndex <= 0) {
      setActiveIndex(testimonials.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }
  function handleNext() {
    if (activeIndex >= testimonials.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }
  return (
    <TestimonialSectionStyles>
      <div className="container">
        <SectionTitle heading="Testimonials" subheading="See what out clients say about us"/>
        <div className="testimonialWrapper">
          <SwitchTransition>
            <CSSTransition
              key={activeSlide.id}
              timeout={300}
              classNames="fade"
            >
              <div className="testimonialInfo">
                <div className="testimonialDesc">
                  <PText>{activeSlide.desc}</PText>
                </div>
                <h2 className="testimonialName">{activeSlide.name}</h2>
                <p className="testimonialTitle">{activeSlide.title}, <br />{activeSlide.org}</p>
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
    </TestimonialSectionStyles>
  )
}
