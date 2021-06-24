import React from 'react';
import { Link } from 'react-router-dom';
import projectImg from '../assets/images/projectImg.png';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const ProjectItemStyles = styled.div`
  .projectItemImg {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      object-position: top center;
      height: 100%;
    }
  }
  .projectItemInfo {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItemTitle {
    font-size: 2.2rem;
  }
  .projectItemDesc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Reqular';
    margin-top: 1rem;
  }
  @media (max-width: 768px) {
    .projectItemImg {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = 'Project Name',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laborum dolores, cum pariatur numquam fugiat eligendi laudantium? Velit quam reprehenderit vero illum omnis voluptas. Unde sapiente recusandae quisquam dolorem modi!',
  src = '/projects' 
}) {
  return (
    <Fade right>
      <ProjectItemStyles>
        <a href={src} rel="noreferrer"  className="projectItemImg">
          <img src={img} alt="project img" />
        </a>
        <div className="projectItemInfo">
          <Link to="#">
            <h3 className="projectItemTitle">{title}</h3>
          </Link>
          <p className="projectItemDesc">{desc}</p>
        </div>
      </ProjectItemStyles>
    </Fade>
  )
}
