import React from 'react';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/me1.jpg';
import styled from 'styled-components';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import SectionTitle from '../components/SectionTitle';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const AboutPageStyles = styled.div`
  padding: 10rem 0;
  .topSection {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 5rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .aboutSubHeading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .aboutHeading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .aboutInfo {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .aboutInfoItems {
    margin-top: 15rem;
  }
  .aboutInfoItem {
    margin-bottom: 10rem;
  }
  .aboutInfoHeading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media (max-width: 768px) {
    padding: 10rem 0;
    .topSection {
      flex-direction: column;
      gap: 5rem;
    }
    .aboutSubHeading {
      font-size: 1.8rem;
    }
    .aboutHeading {
      font-size: 2.8rem;
    }
    .aboutInfoHeading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <SectionTitle heading="About" subheading="Let me introduce myself" />
        <div className="topSection">
          <div className="left">
            <Zoom cascade> 
              <p className="aboutSubHeading">
                Hi, I am <span>Jun Hyeok</span>
              </p>
            </Zoom>
            <Zoom cascade>
              <h2 className="aboutHeading">
                A Front-End Developer
              </h2>
            </Zoom>
            <div className="aboutInfo">
              <PText>
              안녕하세요. 프론트 엔드 개발자가 되고 싶은 김준혁입니다. 빠르게 변화하는 업무 특성에 맞게 모르는 것에 호기심을 갖고, 찾아가며 계속해서 발전하는 프론트 엔드 개발자가 되도록 노력하겠습니다.
              <br /><br />
              저는 소프트웨어 학과에서 팀 프로젝트 경험을 하면서 누구나 알기 쉽게 코드를 명확하고 깔끔하게 짜야 한다는 것을 배웠고, 팬데믹이 겹치면서 팀 프로젝트에서 서로에 의견을 하나로 합치는 것이 힘들었는데 가상회의를 통해 의견이 합쳐 지면서 좋은 결과물을 만들어 혁신원장상을 받은 경험이 있습니다.
              </PText>
            </div>
            <Button btnText="works" btnLink="/projects" />
          </div>
          <Fade right> 
            <div className="right">
              <img src={AboutImg} alt="my img" />
            </div>
          </Fade>
        </div>
        <div className="aboutInfoItems">
          <div className="aboutInfoItem">
            <h1 className="aboutInfoHeading">
              Education
            </h1>
            <AboutInfoItem 
              title="High School"
              items={["서울 용산구 오산고등학교"]}
            />
            <AboutInfoItem 
              title="University"
              items={["강원도 강릉시 가톨릭관동대학교"]}
            />
          </div>
          <div className="aboutInfoItem">
            <h1 className="aboutInfoHeading">
              My Skill
            </h1>
            <AboutInfoItem 
              title="FrontEnd"
              items={['HTML 90%', 'CSS 90%', 'JS 70%', 'REACT 60%']}
            />
          </div>
          <div className="aboutInfoItem">
            <h1 className="aboutInfoHeading">
              Experiences
            </h1>
            <AboutInfoItem 
              title="2014-2020"
              items={['대학교 졸업']}
            />
            <AboutInfoItem 
              title="2020"
              items={['대학교 팀 프로젝트 혁신원장상 수상']}
            />
            <AboutInfoItem 
              title="2021-"
              items={['신입 개발자 취업']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
