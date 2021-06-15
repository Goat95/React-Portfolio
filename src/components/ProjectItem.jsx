import React from 'react';
import { Link } from 'react-router-dom';
import projectImg from '../assets/images/projectImg.png';
import styled from 'styled-components';

const ProjectItemStyles = styled.div`
  .projectItemImg {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
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
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laborum dolores, cum pariatur numquam fugiat eligendi laudantium? Velit quam reprehenderit vero illum omnis voluptas. Unde sapiente recusandae quisquam dolorem modi!' 
}) {
  return (
    <ProjectItemStyles>
      <Link to="/website" className="projectItemImg">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItemInfo">
        <Link to="#">
          <h3 className="projectItemTitle">{title}</h3>
        </Link>
        <p className="projectItemDesc">{desc}</p>
      </div>
    </ProjectItemStyles>
  )
}
