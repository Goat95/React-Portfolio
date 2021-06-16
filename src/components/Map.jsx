import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/map.png';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .mapCard {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .mapCardHeading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .mapCardLink {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    background-position: 80% center;
  }
  @media (max-width: 400px) {
    .mapCard {
      max-width: none;
      right: auto;
    }
  }
`;
export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="mapCard">
          <h3 className="mapCardHeading">Here is me</h3>
          <PText>서울시 은평구 연서로21길</PText>
          <a href="https://www.google.co.kr/maps/place/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EC%9D%80%ED%8F%89%EA%B5%AC+%EA%B0%88%ED%98%842%EB%8F%99+%EC%97%B0%EC%84%9C%EB%A1%9C21%EA%B8%B8/@37.6151715,126.9143868,18z/data=!3m1!4b1!4m5!3m4!1s0x357c982a3a1da4cb:0xe0d0d4b88d6f6970!8m2!3d37.6152234!4d126.9157423?hl=ko" 
          target="_blank" 
          rel="noreferrer"
          className="mapCardLink"
          >Open in Google Map</a>
        </div>
      </div>
    </MapStyles>
  )
}
