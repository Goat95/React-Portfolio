import React from 'react';
import SectionTitle from './SectionTitle';
import PText from './PText';
import Button from './Button';
import AboutImg from '../assets/images/me1.jpg';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSectionLeft,
  .aboutSectionRight {
    flex: 1;
  }
  .sectionTitle {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSectionButtons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media (max-width: 950px) {
    .aboutSectionLeft {
      flex: 4;
    }
    .aboutSectionRight {
      flex: 3;
    }
  }
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSectionLeft,
    .aboutSectionRight {
      width: 100%;
    }
    .aboutSectionRight {
      margin-top: 3rem;
    }
    .sectionTitle {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSectionButtons {
      flex-direction: column;
      gap: 0;
      .buttonWrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSectionLeft">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About me"
          />
          <PText>
            저는 소프트웨어 학과에서 팀 프로젝트 경험을 하면서 누구나 알기 
            쉽게 코드를 명확하고 깔끔하게 짜야 한다는 것을 배웠고, 
            팬데믹이 겹치면서 팀 프로젝트에서 서로에 의견을 하나로 합치는 것이 힘들었는데
            가상회의를 통해 의견이 합쳐 지면서 좋은 결과물을 만들어 혁신원장상을 받은 경험이 있습니다.
          </PText>
          <Fade right>
            <div className="aboutSectionButtons">
              <Button btnLink="/projects" btnText="Works" />
              <Button btnLink="/about" btnText="Read More" outline />
            </div>
          </Fade>
        </div>
        <Fade right>
          <div className="aboutSectionRight">
            <img src={AboutImg} alt="about img" />
          </div>
        </Fade>
      </div>
    </AboutSectionStyle>
  )
}
