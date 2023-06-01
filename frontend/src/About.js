import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <br></br>
        <br></br>
        <Title>ABOUT US</Title>
        <h3 style={{}}>"Where Devotion meets Innovation"</h3>
        <Description>
          e-Kalyanam is an online platform that brings the blessings and
          offerings of famous temples from India to devotees worldwide. Our
          mission is to provide a seamless digital experience that enables
          individuals to connect with their spirituality, participate in virtual
          worship, order prasad, and support temple initiatives.
        </Description>
        <Features>
          <Link to={"/orderprasad"}>
            <Feature>
              <FeatureIcon src="./images/temple-icon.png" alt="Feature 1" />
              <FeatureTitle>Prasad Delivery</FeatureTitle>
              <FeatureDescription>
                Experience the divine taste of prasad delivered from your
                favorite temples with utmost purity and reverence.
              </FeatureDescription>
            </Feature>
          </Link>

          <Link to={'/templestore'}>
          <Feature>
            <FeatureIcon src="./images/store-icon.png" alt="Feature 2" />
            <FeatureTitle>Temple Store</FeatureTitle>
            <FeatureDescription>
              Explore a wide range of temple merchandise, supporting local
              artisans and craftsmen who contribute to the preservation of our
              cultural heritage.
            </FeatureDescription>
          </Feature>
          </Link>
          <Feature>
            <FeatureIcon src="./images/worship-icon.png" alt="Feature 3" />
            <FeatureTitle>Virtual Worship</FeatureTitle>
            <FeatureDescription>
              Engage in rituals and ceremonies from the comfort of your home,
              connecting with the divine and deepening your spiritual practice.
            </FeatureDescription>
          </Feature>
          <Feature>
            <FeatureIcon src="./images/donation-icon.png" alt="Feature 4" />
            <FeatureTitle>Donations</FeatureTitle>
            <FeatureDescription>
              Contribute to temple initiatives and fundraisers, supporting the
              preservation and promotion of our rich cultural heritage.
            </FeatureDescription>
          </Feature>
        </Features>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #f9f9f9;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: tomato;
`;

const Description = styled.p`
  font-size: 1.6rem;
  color: #777;
  margin-bottom: 2.5rem;
`;

const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Feature = styled.div`
  width: 250px;
  padding: 1.5rem;
  margin: 1rem;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  &:hover{
    transform: scale(1.1);
    transition: all 0.5s;
  }
`;

const FeatureIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1.5rem;
  color: #777;
`;

export default About;
