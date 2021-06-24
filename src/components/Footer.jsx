import React from 'react';
import FooterCol from './FooterCol';
import PText from './PText';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footerCol1 {
    flex: 2;
  }
  .footerCol2,
  .footerCol3,
  .footerCol4 {
    flex: 1;
  }
  .footerCol1Title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footerCol1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footerCol1">
          <h1 className="footerCol1Title">Jun Hyeok</h1>
          <PText>
            안녕하세요. 프론트 엔드 개발자가 되고 싶은 김준혁입니다.
            빠르게 변화하는 업무 특성에 맞게 모르는 것에 호기심을 갖고, 
            찾아가며 계속해서 발전하는 프론트 엔드 개발자가 되도록 노력하겠습니다.
          </PText>
        </div>
        <Fade right>
          <div className="footerCol2">
            <FooterCol heading="Important Links"
              links={[
                {
                  title: "Home",
                  path: "/",
                  type: "Link"
                },
                {
                  title: "About",
                  path: "/about",
                  type: "Link"
                },
                {
                  title: "Projects",
                  path: "/projects",
                  type: "Link"
                },
                {
                  title: "Animation",
                  path: "/animation",
                  type: "Link"
                },
                {
                  title: "Contact",
                  path: "/contact",
                  type: "Link"
                },
              ]}
            />
          </div>
        </Fade>
        <Fade right>
          <div className="footerCol3">
            <FooterCol
              heading="Contact Info"
              links={
                [
                  {
                    title: "010-2887-8816",
                    path: "tel:+880123"
                  },
                  {
                    title: "goat95@naver.com",
                    path: "mailto:goat95@naver.com"
                  },
                  {
                    title: "서울 은평구 연서로21길",
                    path: "http://google.com/maps"
                  }
                ]
              }
            />
          </div>
        </Fade>
        <Fade right>
          <div className="footerCol4">
            <FooterCol 
              heading="Social Links"
              links={[
                {
                  title: "Facebook",
                  path: "http://facebook.com"
                },
                {
                  title: "Instagram",
                  path: "http://instagram.com"
                },
                {
                  title: "Twitter",
                  path: "http://twitter.com"
                },
              ]}
            />
          </div>
        </Fade>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>®2021 - Jun Hyeok | Designed By Web Cifar</PText>
        </div>
      </div>
    </FooterStyles>
  )
}
