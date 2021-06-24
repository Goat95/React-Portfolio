import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import PText from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import styled from 'styled-components';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .heroHeading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    z-index: 10;
    span {
      display: inline-block;
      width: 100%;
    }
    .heroName {
      font-size: 7rem;
      font-family: "Montserrat SemiBold";
      color: var(--white);
    }
  }
  .heroImg {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .heroInfo {
    margin-top: -18rem;
  }
  .heroSocial,
  .heroScrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .heroSocial {
    left: 50px;
  }
  .heroScrollDown {
    right: 50px;
  }
  .heroSocialIndicator,
  .heroScrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: .7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .heroScrollDown {
    img {
      max-height: 70px;
    }
  }
  .heroSocialText {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }
  @media (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .heroHeading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .heroName {
        font-size: 4.5rem;
      } 
    }
    .heroImg {
      height: 300px;
    }
    .heroInfo {
      margin-top: 3rem;
    }
    .heroSocial {
      left: 0;
      bottom: -15%;
      width: 20px;
      .heroSocialIndicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .heroSocialText {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .heroScrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <Zoom>
            <h1 className="heroHeading">
              <span>Hello This is</span>
              <span className="heroName">Jun Hyeok</span>
            </h1>
          </Zoom>
          <Fade bottom>
            <div className="heroImg">
              <img src={HeroImg} alt="hero"/>
            </div>
          </Fade>
          <Zoom>
            <div className="heroInfo">
              <PText>
                안녕하세요. 프론트 엔드 개발자가 되고 싶은 김준혁입니다. 
                빠르게 변화하는 업무 특성에 맞게 모르는 것에 호기심을 갖고, 
                찾아가며 계속해서 발전하는 프론트 엔드 개발자가 되도록 노력하겠습니다.
              </PText> 
              <Button btnLink="/projects" btnText="see my works" />
            </div>
          </Zoom>
          <div className="heroSocial">
            <div className="heroSocialIndicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="social media arrow" />
            </div>
            <div className="heroSocialText">
              <ul>
                <li>
                  <a href="http://goat95.dothome.co.kr/" target="_blank" rel="noreferrer">FB</a>
                </li>
                <li>
                  <a href="http://goat95.dothome.co.kr/" target="_blank" rel="noreferrer">TW</a>
                </li>
                <li>
                  <a href="http://goat95.dothome.co.kr/" target="_blank" rel="noreferrer">LI</a>
                </li>
                <li>
                  <a href="http://goat95.dothome.co.kr/" target="_blank" rel="noreferrer">IG</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="heroScrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="scroll down arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  )
}
