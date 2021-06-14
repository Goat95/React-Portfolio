import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import PText from './PText';
import styled from 'styled-components';

const ItemStyles = styled.div`
  text-align: center;
  .servicesItemIcon {
    svg {
      width: 3rem;
    }
  }
  .servicesItemTitle {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam itaque rem eveniet voluptas vitae corrupti assumenda dolorum architecto pariatur et! Sit voluptates in vel voluptatem distinctio. Nostrum, maxime. Cum, doloremque.'
}) {
  return (
    <ItemStyles>
      <div className="servicesItemIcon">{icon}</div>
      <div className="servicesItemTitle">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  )
}
