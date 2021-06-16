import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import ProjectInfo from '../assets/data/projects';

const WebsitesStyles = styled.div`
  padding: 10rem 0;
  .websitesAllItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .websiteSearchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .websiteSearchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .websiteSearchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .websiteSearchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media (max-width: 768px) {
    .websiteSearchBar,
    .websiteSearchBar form,
    .websiteSearchBar input {
      width: 100%;
    }
  }
`;

export default function Website() {
  const [searchText, setSearchText] = useState('');
  const [projectData, setProjectData] = useState(ProjectInfo);

  useEffect(() => {
    if (searchText === '') return;
    setProjectData(() => 
      ProjectInfo.filter((item) => 
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    )
  }, [searchText]);

  function handleChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(ProjectInfo);
    }
  }

  return (
    <WebsitesStyles>
      <div className="container">
        <SectionTitle heading="Websites" subheading="some of my recent works" />
        <div className="websiteSearchBar">
          <form>
            <input type="text" 
              value={searchText}
              onChange={handleChange}
              placeholder="Project Name"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="websitesAllItems">
          {projectData.map(item => (
            <ProjectItem 
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </WebsitesStyles>
  )
}
