import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import styled from 'styled-components';
import AnimationItem from '../components/AnimationItem'; 
import AnimationInfo from '../assets/data/animations';

const AnimationStyles = styled.div`
  padding: 10rem 0;
`;

export default function Animation() {
  const [animationData, setAnimationData] = useState(AnimationInfo);
  return (
    <AnimationStyles>
      <div className="container">
        <SectionTitle heading="Animation" subheading="Various animation effects" />
        <div className="AnimationAllItems">
          {animationData.map(item => (
            <AnimationItem 
              key={item.id}
              title={item.name}
              desc={item.desc}
              src={item.src}
            />
          ))}
        </div>
      </div>
    </AnimationStyles>
  )
}
