import React from 'react';
import styled from 'styled-components';
import {Button} from '../styles/Button';
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <Wrapper>
        <div className="container">
            <div className="grid grid-two-column">
                <div className="hero-section-data">
                <p className="intro-data">Welcome to </p>
                <h2> e-Kalyanam </h2>
                <p>
                e-Kalyanam is a pilgrimage and darshan site based in India giving pilgrims and tourists a one-stop portal to travel around India&#8217;s top religious destinations, to order prasad from your home, spiritual store and many more...
                </p>
                <NavLink>
                    <Button>Explore now</Button>
                </NavLink>
                </div>
                {/* Image for homepage */}
                <div className="hero-section-image">
            <figure>
              <img
                src="images/hero2.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
            </div>
        </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h2 {
      // text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
      color : #ff0000;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: #ff9999;
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: auto;
    height: 250px;
    
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: #ff9999;
    }
  }
`;

export default HeroSection;