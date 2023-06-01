import React from "react";
import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper>
      <section id="testimonial">
        <h2 className="testimonial-title">What Our Customer Say</h2>
        <div className="testimonial-container container">
          <div className="testimonial-box">
            <div className="star-rating">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
            <p className="testimonial-text">
              I had a wonderful experience ordering prasad from this website.
              The prasad was delicious and packed with utmost care. The delivery
              was prompt, and the customer service was excellent. 
            </p>
            <div className="customer-details cust1">
              <div className="customer-photo">
                <img src="./images/male-photo1.jpg" alt="" />
              </div>
              <p className="customer-name">Shibmo Vamo</p>
            </div>
          </div>
          <div className="testimonial-box">
            <div className="star-rating">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
            <p className="testimonial-text">
              I recently purchased rudraksha and gemstones from this spiritual
              website, and I am extremely happy with my purchase. The quality of
              the products is excellent, and they have a wide variety to choose
              from.
            </p>
            <div className="customer-details cust2">
              <div className="customer-photo">
                <img src="./images/male-photo4.jpg" alt="" />
              </div>
              <p className="customer-name">Yashu Dhue</p>
            </div>
          </div>
          <div className="testimonial-box">
            <div className="star-rating">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
            <p className="testimonial-text">
              I am a regular customer of this spiritual website, and their
              service never fails to impress me. The prasad is always fresh and
              divine, and the collection of religious items is extensive. 
            </p>
            <div className="customer-details cust3">
              <div className="customer-photo">
                <img src="./images/male-photo3.jpg" alt="" />
              </div>
              <p className="customer-name">Prado Dobe</p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  #testimonial {
    padding: 5rem 0;
    background: #ffffff; // ${({ theme }) => theme.colors.bg};
  }

  .testimonial-title {
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
    color: #555;
  }

  .testimonial-container {
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
    padding: 1rem;
  }

  ${
    "" /* .testimonial-box .testimonial-text{
    margin: 1rem 0;
} */
  }

  .testimonial-box {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    margin-left: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .customer-details {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-content: center;
  }

  .testimonial-box img {
    display: block;
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    margin: auto;
  }

  .customer-name {
    text-align: center;
  }

  .testimonial-container .checked,
  .testimonial-container .fa-solid {
    color: #ff9529;
  }

  .testimonial-box {
    text-align: center;
    padding: 1rem;
  }
`;

export default Trusted;
